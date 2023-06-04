import API_ENDPOINT from '../global/api-endpoint'

const { LIST, DETAIL, ADD_REVIEW, SEARCH } = API_ENDPOINT

const RestaurantSource = {
  async listRestaurants () {
    const response = await (await fetch(LIST)).json()

    return response
  },

  async detailRestaurant (id) {
    const response = await (await fetch(`${DETAIL(id)}`)).json()

    return response
  },

  async searchRestaurants (query) {
    if ('caches' in window) {
      const cacheResponse = await caches.match('https://restaurant-api.dicoding.dev/list')

      if (cacheResponse) {
        const cacheResponseJson = await cacheResponse.json()
        cacheResponseJson.restaurants = cacheResponseJson.restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(query.toLowerCase()))
        return cacheResponseJson
      }
    }

    const response = await (await fetch(`${SEARCH(query)}`)).json()
    return response
  },

  async addReview (reviewData) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    }
    const response = await (await fetch(ADD_REVIEW, options)).json()

    return response
  }
}

export default RestaurantSource
