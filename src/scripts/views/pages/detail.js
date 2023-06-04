import RestaurantSource from '../../data/restaurant-source'
import FavoriteRestaurantIdb from '../../data/restaurant-favorited-idb'
import UrlParser from '../../routes/url-parser'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'

import '../components/favorite-button'
import '../components/fail-response'
import '../components/loading-detail'
import '../templates/restaurant-detail-template'

const Detail = {
  async render () {
    return `
      <div class="container" id="restaurant">
      </div>
      <div id="favorite-button-container"></div>
    `
  },

  async afterRender () {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.appendChild(document.createElement('loading-detail-indicator'))

    const favoriteButtonContainer = document.querySelector('#favorite-button-container')
    favoriteButtonContainer.style.display = 'none'

    let restaurant = await FavoriteRestaurantIdb.get(id)

    if (!restaurant) {
      const response = (await RestaurantSource.detailRestaurant(id))
      if (response.error) {
        restaurantContainer.innerHTML = `
          <fail-response message="${response.message}"></fail-response>
        `
        return
      }
      restaurant = response.restaurant
    }

    restaurantContainer.removeChild(restaurantContainer.querySelector('loading-detail-indicator'))
    favoriteButtonContainer.style.display = 'block'

    const restaurantDetail = document.createElement('restaurant-detail-template')
    restaurantDetail.restaurant = restaurant
    restaurantContainer.appendChild(restaurantDetail)

    FavoriteButtonInitiator.init({
      favoriteButtonContainer,
      restaurant
    })
  }
}

export default Detail
