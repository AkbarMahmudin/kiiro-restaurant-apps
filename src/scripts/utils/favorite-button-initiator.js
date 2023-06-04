import FavoriteRestaurantIdb from '../data/restaurant-favorited-idb'

import '../views/components/favorite-button'

const FavoriteButtonInitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      return this._renderFavorited()
    } else {
      return this._renderFavorite()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantIdb.get(id)
    return !!restaurant
  },

  _renderFavorite () {
    const favoriteButton = document.createElement('favorite-button')
    favoriteButton.state = {
      isFavorite: false,
      restaurant: this._restaurant
    }

    this._favoriteButtonContainer.appendChild(favoriteButton)
  },

  _renderFavorited () {
    const favoriteButton = document.createElement('favorite-button')
    favoriteButton.state = {
      isFavorite: true,
      restaurant: this._restaurant
    }

    this._favoriteButtonContainer.appendChild(favoriteButton)
  }
}

export default FavoriteButtonInitiator
