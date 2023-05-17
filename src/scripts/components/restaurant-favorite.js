import { LitElement, html, css } from 'lit'

class RestaurantFavorite extends LitElement {
  static properties = {
    isFavorite: { type: Boolean },
    fillIcon: { type: String }
  }

  static styles = css`
    button {
      min-height: 44px;
      min-width: 44px;
      outline: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      background-color: transparent;
      justify-content: center;
      margin: 0;
      padding: 7px;
    }

    button:focus-within {
      outline: solid 2px var(--primary);
      box-shadow: 0 0 0 2px var(--primary);
    }
  `

  constructor () {
    super()
    this.isFavorite = false
    this.fillIcon = '#EEEEEE'
  }

  _handleFavorite () {
    this.isFavorite = !this.isFavorite
    this.fillIcon = this.isFavorite ? '#EB5757' : '#EEEEEE'
    this.requestUpdate()
  }

  render () {
    return html`
      <button aria-label="Tambahkan ke daftar restoran favorit" @click="${this._handleFavorite}">
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50472 13L1.13916 7.01207C-2.32038 3.41931 2.76514 -3.47878 7.50472 2.10197C12.2443 -3.47878 17.3068 3.44326 13.8703 7.01207L7.50472 13Z" fill="${this.fillIcon}"/>
        </svg>
      </button>
    `
  }
}

customElements.define('restaurant-favorite', RestaurantFavorite)
