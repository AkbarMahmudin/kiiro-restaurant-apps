import { LitElement, html, css } from 'lit'

import './restaurant-thumbnail'
import './restaurant-city'
import './restaurant-rating'
import './restaurant-favorite'

class RestaurantItem extends LitElement {
  static properties = {
    name: {},
    rating: {},
    city: {},
    picture: {},
    classes: {}
  }

  static styles = css`
    :host:focus {
      outline: none;
      border: none;
    }
    
    .restaurant-item {
      display: flex;
      background-color: var(--secondary);
      border-radius: 10px;
      overflow: hidden;
    }

    .restaurant-item:hover {
      background-color: var(--secondary-hover);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .restaurant-item__thumbnail {
      max-height: max-content;
      background-size: cover;
      background-position: center;
      width: 34%;
      border-radius: 10px;
    }

    .restaurant-item__content {
      padding: 16px;
      width: 66%;
    }

    .restaurant-item__name {
      font-size: 16px;
    }

    .restaurant-item__info {
      display: flex;
      gap: 10px;
      margin: 8px 0 0 0;
      font-size: 12px;
    }

    @media screen and (min-width: 650px) {
      .restaurant-item {
        flex-direction: column;
      }
    
      .restaurant-item__thumbnail {
        width: 100%;
        height: 200px;
      }
    }
  `

  constructor () {
    super()
    this.name = ''
    this.rating = 0
    this.city = ''
    this.picture = ''
    this.classes = {
      'restaurant-item': true,
      'restaurant-item__thumbnail': true,
      'restaurant-item__name': true,
      'restaurant-item__content': true,
      'restaurant-item__info': true
    }
  }

  render () {
    return html`
      <article class="restaurant-item">
        <img src="${this.picture}" alt="${this.name}" class="restaurant-item__thumbnail">
        <div class="restaurant-item__content">
          <h2 class="restaurant-item__name">${this.name}</h2>
          <div class="restaurant-item__info">
            <restaurant-rating rating="${this.rating}"></restaurant-rating>
            <restaurant-city city="${this.city}"></restaurant-city>
            <restaurant-favorite></restaurant-favorite>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
