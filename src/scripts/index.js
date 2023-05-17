import 'regenerator-runtime' /* for async await transpile */
import renderRestaurantList from './restaurants'
import 'modern-normalize'
import '../styles/main.css'

const mainElement = document.querySelector('main')
const hamburgerButtonElement = document.querySelector('#hamburger')
const drawerElement = document.querySelector('#drawer')
const btnFavorite = document.querySelector('#btn-favorite')

document.addEventListener('DOMContentLoaded', () => {
  renderRestaurantList()
})

hamburgerButtonElement.addEventListener('click', event => {
  drawerElement.classList.toggle('open')
  event.stopPropagation()
})

mainElement.addEventListener('click', event => {
  drawerElement.classList.remove('open')
  event.stopPropagation()
})

btnFavorite.addEventListener('click', event => {
  btnFavorite.classList.toggle('active')
  event.stopPropagation()
})
