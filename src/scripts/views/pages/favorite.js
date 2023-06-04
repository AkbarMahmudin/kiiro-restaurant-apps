import FavoriteRestaurantIdb from '../../data/restaurant-favorited-idb'

import '../components/loading'
import '../components/fail-response'
import '../templates/restaurant-item-template'

const Favorite = {
  async render () {
    return `
      <section class="content">
        <div class="container">
          <h2 class="content__title">
            Favorite Restaurants
          </h2>
          <div class="restaurants" id="restaurants">
          </div>
        </div>
      </section>
    `
  },

  async afterRender () {
    const restaurantsContainer = document.querySelector('#restaurants')

    restaurantsContainer.appendChild(document.createElement('loading-indicator'))

    const restaurants = await FavoriteRestaurantIdb.getAll()

    restaurantsContainer.removeChild(restaurantsContainer.querySelector('loading-indicator'))
    if (!restaurants.length) {
      const failResponse = document.createElement('fail-response')
      failResponse.setAttribute('message', 'You don\'t have any favorite restaurant yet')

      restaurantsContainer.style.display = 'flex'

      return restaurantsContainer.appendChild(failResponse)
    }

    restaurants.map((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item-template')
      restaurantItem.restaurant = restaurant

      return restaurantsContainer.appendChild(restaurantItem)
    })
  }
}

export default Favorite
