import data from '../DATA.json'
import './components/restaurant-item'

const renderRestaurantList = () => {
  const restaurantListElement = document.querySelector('#restaurants')
  data.restaurants.map((restaurant) => {
    const restaurantItemElement = document.createElement('restaurant-item')
    restaurantItemElement.name = restaurant.name
    restaurantItemElement.rating = restaurant.rating
    restaurantItemElement.city = restaurant.city
    restaurantItemElement.picture = restaurant.pictureId

    return restaurantListElement.appendChild(restaurantItemElement)
  })
}

export default renderRestaurantList
