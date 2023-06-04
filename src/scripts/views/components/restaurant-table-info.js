import './tags'

class RestaurantTableInfo extends HTMLElement {
  constructor () {
    super()
    this._restaurant = {}
  }

  get restaurant () {}

  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  _restaurantCategories () {
    const restaurantCategories = document.createElement('restaurant-tags')
    restaurantCategories.categories = this._restaurant.categories

    return restaurantCategories
  }

  render () {
    this.innerHTML = `
      <style>
        td {
          width: 80%;
        }

        td span.tags {
          display: inline-block;
          padding: 4px 8px;
          margin: 4px 0;
          border-radius: 4px;
          background-color: #F6C90E90;
          color: var(--background);
          font-weight: 600;
        }

        th {
          width: 20%;
        }

        td, th {
          border-bottom: 2px solid var(--secondary);
          padding: 18px 10px;
          text-align: left;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }

        p {
          font-weight: 400;
          line-height: 1.5;
          color: #EEEEEE70;
        }
      </style>

      <table>
        <tr>
          <th>Address</th>
          <td>${this._restaurant.address}</td>
        </tr>
        <tr>
          <th>Categories</th>
          <td>
            ${this._restaurantCategories().outerHTML}
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <strong>Description</strong>
            <p>${this._restaurant.description}</p>
          </td>
        </tr>
      </table>
    `
  }
}

customElements.define('restaurant-table-info', RestaurantTableInfo)
