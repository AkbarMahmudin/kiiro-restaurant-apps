import CONFIG from '../../global/config'

import '../components/icon-label'
import '../components/restaurant-table-info'
import '../components/restaurant-menus-card'
import '../components/customer-reviews'
import '../components/form-review'

class RestaurantDetailTemplate extends HTMLElement {
  constructor () {
    super()
    this._restaurant = {}
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  get restaurant () {
    return this._restaurant
  }

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  _tableInfo () {
    const tableInfo = document.createElement('restaurant-table-info')
    tableInfo.restaurant = this._restaurant

    return tableInfo
  }

  _menusCard () {
    const menusCard = document.createElement('restaurant-menus-card')
    menusCard.menus = this._restaurant.menus

    return menusCard
  }

  _customerReviews () {
    const customerReviews = document.createElement('customer-reviews')
    customerReviews.reviews = this._restaurant.customerReviews

    return customerReviews
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        header h3 {
          font-size: 30px;
        }

        header div {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
        }

        section.restaurant-detail__info img {
          width: 100%;
          border-radius: 10px;
          background-size: cover;
          background-position: center;
        }

        section.restaurant-menus,
        section.restaurant-reviews {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        section > h3 {
          font-size: 20px;
          text-align: center;
        }

        .restaurant-reviews__container {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 20px;
        }

        @media screen and (min-width: 1200px) {
          section.restaurant-detail__info {
            display: flex;
            gap: 20px;
          }

          section.restaurant-detail__info img {
            width: 50%;
          }

          .restaurant-reviews__container {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        }
      </style>
      <header>
        <h2>${this._restaurant.name}</h2>
        <div>
          <icon-label icon="/images/icons/star.svg" alt="Ikon bintang" text="${this._restaurant.rating}"></icon-label>
          <icon-label icon="/images/icons/location.svg" alt="Ikon pin lokasi" text="${this._restaurant.city}"></icon-label>
        </div>
      </header>

      <section class="restaurant-detail__info">
        <img src="${CONFIG.BASE_IMAGE_URL()}/${this._restaurant.pictureId}" alt="Gambar Restoran ${this._restaurant.name}" />
        ${this._tableInfo().outerHTML}
      </section>

      <section class="restaurant-menus">
        <h3>All Menus</h3>
        ${this._menusCard().outerHTML}
      </section>

      <section class="restaurant-reviews">
        <h3>Customer Reviews</h3>
        <div class="restaurant-reviews__container">
          <form-review></form-review>
          ${this._customerReviews().outerHTML}
        </div>
      </section>
    `
  }
}

customElements.define('restaurant-detail-template', RestaurantDetailTemplate)
