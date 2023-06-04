import FavoriteRestaurantIdb from '../../data/restaurant-favorited-idb'

class FavoriteButton extends HTMLElement {
  constructor () {
    super()
    this._state = {
      isFavorite: false,
      restaurant: {}
    }
  }

  get state () {
    return this._state
  }

  set state (state) {
    this._state = state
    this.render()
  }

  async _handleFavorite (event) {
    this._state.isFavorite = !this._state.isFavorite

    if (this._state.isFavorite) {
      await FavoriteRestaurantIdb.put(this._state.restaurant)
    } else {
      await FavoriteRestaurantIdb.delete(this._state.restaurant.id)
    }

    this.render()
    event.stopPropagation()
  }

  _favoriteIcon () {
    return `
      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.50472 13L1.13916 7.01207C-2.32038 3.41931 2.76514 -3.47878 7.50472 2.10197C12.2443 -3.47878 17.3068 3.44326 13.8703 7.01207L7.50472 13Z" fill="${this._state.isFavorite ? '#EB5757' : '#EEEEEE'}"/>
      </svg>
    `
  }

  render () {
    this.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        button {
          min-width: 44px;
          min-height: 44px;
          padding: 7px;
          outline: none;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          background-color: transparent;
        }

        button.btn-favorite:focus {
          outline: 2px solid #EB5757;
          border-radius: 50%;
        }
      </style>

      <button class="btn-favorite">
        ${this._favoriteIcon()}
      </button>
    `

    this.querySelector('button').addEventListener('click', this._handleFavorite.bind(this))
  }
}

customElements.define('favorite-button', FavoriteButton)
