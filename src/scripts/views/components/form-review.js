import RestaurantSource from '../../data/restaurant-source'
import FavoriteRestaurantIdb from '../../data/restaurant-favorited-idb'
import UrlParser from '../../routes/url-parser'
import '../templates/restaurant-detail-template'
import '../components/customer-reviews'
import '../components/fail-response'

class FormReview extends HTMLElement {
  constructor () {
    super()
    this._restaurantId = UrlParser.parseActiveUrlWithoutCombiner().id
    this.addEventListener('submit', this._addReview)
  }

  connectedCallback () {
    this.render()
  }

  async _addReview (event) {
    event.preventDefault()

    const name = this.querySelector('#name').value
    const review = this.querySelector('#review').value

    const response = await RestaurantSource.addReview({
      id: this._restaurantId,
      name,
      review
    })

    if (response.error) {
      alert(response.message)
      return 0
    }

    const { restaurant } = await RestaurantSource.detailRestaurant(this._restaurantId)

    this._updateCustomerReviews(this.parentElement, restaurant.customerReviews)

    if (await this._isFavoriteRestaurant()) {
      await FavoriteRestaurantIdb.put(restaurant)
    }

    this.querySelector('#name').value = ''
    this.querySelector('#review').value = ''
  }

  async _isFavoriteRestaurant () {
    const restaurant = await FavoriteRestaurantIdb.get(this._restaurantId)

    return !!restaurant
  }

  _updateCustomerReviews (customerReviewsContainer, reviews) {
    const customerReviews = document.createElement('customer-reviews')
    customerReviews.reviews = reviews

    customerReviewsContainer.querySelector('customer-reviews').remove()
    customerReviewsContainer.appendChild(customerReviews)
  }

  render () {
    this.innerHTML = `
      <style>
        .form-review {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 23px;
          border-radius: 10px;
          border: 2px solid #EEEEEE50;
        }

        .form-review form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        
        .form-control {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        
        .form-control input,
        .form-control textarea {
          font-family: inherit;
          min-height: 44px;
          padding: 0;
          border: none;
          border-bottom: 1px solid #EEEEEE50;
          outline: none;
          font-size: 16px;
          background-color: transparent;
          color: var(--text);
        }

        .form-control input:focus,
        .form-control textarea:focus {
          border-bottom: 2px solid var(--primary);
        }

        .form-control input {
          font-weight: 600;
        }

        .form-control textarea {
          min-height: 100px;
          resize: none;
        }

        .form-control textarea::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          background-color: var(--secondary);
        }

        .form-control textarea::-webkit-scrollbar {
          width: 6px;
          background-color: var(--secondary);
        }

        .form-control textarea::-webkit-scrollbar-thumb {
          background-color: var(--primary);
        }

        .form-control button {
          font-family: inherit;
          font-weight: 600;
          background-color: var(--secondary);
          color: var(--text);
          border: none;
          border-radius: 10px;
          padding: 10px 20px;
          min-height: 44px;
          cursor: pointer;
          margin-top: 20px;
        }

        .form-control button:focus {
          outline: var(--text) auto 2px;
        }

        .form-control button:hover {
          font-weight: 600;
          background-color: var(--primary);
          color: var(--secondary);
          transition: 0.3s ease-in-out;
        }

      </style>
      <aside class="form-review">
        <h4>Add Review</h4>
        <form>
          <div class="form-control">
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div class="form-control">
            <textarea id="review" name="review" placeholder="Your review" required></textarea>
          </div>
          <div class="form-control">
            <button type="submit">Send</button>
          </div>
        </form>
      </aside>
    `
  }
}

customElements.define('form-review', FormReview)
