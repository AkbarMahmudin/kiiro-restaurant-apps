import './icon-label'

class RestaurantMenusCard extends HTMLElement {
  constructor () {
    super()
    this._menus = []
  }

  get menus () {
    return this._menus
  }

  set menus (menus) {
    this._menus = menus
    this.render()
  }

  _cardMenu () {
    let cardMenu = ''

    for (const key in this._menus) {
      const listMenu = this._menus[key].map((menu) => `
        <li>${menu.name}</li>
      `)

      cardMenu += `
        <div class="card-menu">
          <h4 class="card-menu__title">
            <icon-label icon="/images/icons/${key}.svg" text="${key}"></icon-label>
          </h4>
          <ul class="card-menu__list">
            ${listMenu.join('')}
          </ul>
        </div>
      `
    }

    return cardMenu
  }

  render () {
    this.innerHTML = `
      <style>
        restaurant-menus-card {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .card-menu {
          background-color: var(--secondary);
          padding: 18px 22px 28px 22px;
          border-radius: 10px;
        }

        .card-menu__title {
          font-size: 20px;
          text-transform: capitalize;
          color: var(--primary);
        }

        .card-menu__list {
          padding: 0 20px;
          line-height: 2;
          color: #eeeeee90;
        }

        .card-menu__list li {
          padding: 0 10px;
        }
        
        @media screen and (min-width: 650px) {
          restaurant-menus-card > div.card-menu {
            width: 100%;
          }

          restaurant-menus-card {
            display: flex;
            gap: 20px;
            width: fit-content;
          }

          .card-menu__list {
            columns: 2;
            -webkit-columns: 2;
            -moz-columns: 2;
          }
        }
      </style>

      ${this._cardMenu()}
    `
  }
}

customElements.define('restaurant-menus-card', RestaurantMenusCard)
