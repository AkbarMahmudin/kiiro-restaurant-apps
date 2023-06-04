import RestaurantSource from '../../data/restaurant-source'

import '../components/loading'
import '../components/fail-response'
import '../templates/restaurant-item-template'

const Home = {
  async render () {
    return `
      <div class="hero">
        <div class="container">
          <div class="hero__inner">
            <h2 class="hero__title">Welcome to KIIRO</h1>
            <p class="hero__tagline">Find your favorite restaurant here</p>
            <form class="hero__search">
              <input type="text" class="hero__input" placeholder="Search restaurant">
              <button type="submit" class="hero__ctas btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.9494 18.7933 8.90908 18.3913 7.93845C17.9892 6.96782 17.3999 6.08589 16.657 5.343C15.9141 4.60011 15.0322 4.01082 14.0616 3.60877C13.0909 3.20673 12.0506 2.99979 11 2.99979C9.94942 2.99979 8.90911 3.20673 7.93848 3.60877C6.96785 4.01082 6.08591 4.60011 5.34302 5.343C3.84269 6.84333 2.99982 8.87821 2.99982 11C2.99982 13.1218 3.84269 15.1567 5.34302 16.657C6.84335 18.1573 8.87824 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <section class="content">
        <div class="container">
          <h2 class="content__title">
            Restaurants
          </h2>
          <div class="restaurants" id="restaurants">
          </div>
        </div>
      </section>
    `
  },

  async handleSearch (event) {
    event.preventDefault()

    const query = document.querySelector('.hero__input').value
    const { restaurants } = await RestaurantSource.searchRestaurants(query)

    const restaurantsContainer = document.querySelector('#restaurants')
    restaurantsContainer.innerHTML = ''
    restaurantsContainer.style.display = 'grid'

    if (!restaurants.length) {
      restaurantsContainer.style.display = 'flex'
      restaurantsContainer.innerHTML = `
        <fail-response title="Oops.." message="No restaurant found <br> keyword: ${query}"></fail-response>
      `
      return
    }

    restaurants.map((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item-template')
      restaurantItem.restaurant = restaurant

      return restaurantsContainer.appendChild(restaurantItem)
    })
  },

  async afterRender () {
    const restaurantsContainer = document.querySelector('#restaurants')
    restaurantsContainer.appendChild(document.createElement('loading-indicator'))

    const searchForm = document.querySelector('.hero__search')
    searchForm.addEventListener('submit', this.handleSearch)

    const { restaurants } = await RestaurantSource.listRestaurants()

    if (restaurants) {
      restaurantsContainer.removeChild(restaurantsContainer.querySelector('loading-indicator'))
    }

    restaurants.map((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item-template')
      restaurantItem.restaurant = restaurant

      return restaurantsContainer.appendChild(restaurantItem)
    })
  }
}

export default Home
