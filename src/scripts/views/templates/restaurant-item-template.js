import CONFIG from '../../global/config'

import '../components/icon-label'
import '../components/favorite-button'

class RestaurantItemTemplate extends HTMLElement {
  constructor () {
    super()
    this._restaurant = {}
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  get restaurant () {}

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  _restaurantThumbnail () {
    const restaurantThumbnail = document.createElement('img')
    restaurantThumbnail.classList.add('restaurant-item__thumbnail')
    restaurantThumbnail.src = `${CONFIG.BASE_IMAGE_URL()}/${this._restaurant.pictureId}`
    restaurantThumbnail.alt = this._restaurant.name

    return restaurantThumbnail
  }

  _restaurantCity () {
    const restaurantCity = document.createElement('icon-label')
    restaurantCity.setAttribute('icon', '/images/icons/location.svg')
    restaurantCity.setAttribute('alt', 'Ikon pin lokasi')
    restaurantCity.setAttribute('text', this._restaurant.city)

    return restaurantCity
  }

  _restaurantRating () {
    const restaurantRating = document.createElement('icon-label')
    restaurantRating.setAttribute('icon', '/images/icons/star.svg')
    restaurantRating.setAttribute('alt', 'Ikon bintang')
    restaurantRating.setAttribute('text', this._restaurant.rating)

    return restaurantRating
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        article:hover {
          background-color: #3a475080;
        }

        article {
          display: flex;
          background-color: var(--secondary);
          border-radius: 10px;
          overflow: hidden;
        }

        article .restaurant-item__thumbnail {
          max-height: max-content;
          background-size: cover;
          background-position: center;
          width: 34%;
        }

        article .restaurant-item__content {
          padding: 16px;
          width: 66%;
        }

        article .restaurant-item__info {
          display: flex;
          gap: 20px;
          margin: 8px 0 14px 0;
          font-size: 12px;
        }

        h3 {
          margin: 0;
        }

        a {
          display: inline-block;
          min-width: 44px;
          padding: 14px 0;
          text-decoration: none;
          color: var(--text);
        }

        a:hover {
          color: var(--primary);
        }

        @media screen and (min-width: 650px) {
          article {
            flex-direction: column;
          }

          article .restaurant-item__thumbnail {
            width: 100%;
            height: 200px;
          }
        }
      </style>
      
      <article>
        ${this._restaurantThumbnail().outerHTML}
        <div class="restaurant-item__content">
          <h3 class="restaurant-item__name">
            <a href="/#/detail/${this._restaurant.id}">
              ${this._restaurant.name}
            </a>
          </h3>
          <div class="restaurant-item__info">
            ${this._restaurantRating().outerHTML}
            ${this._restaurantCity().outerHTML}
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-item-template', RestaurantItemTemplate)
