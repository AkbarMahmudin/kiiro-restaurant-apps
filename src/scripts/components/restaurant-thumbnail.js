import { LitElement, html, css } from 'lit'

class RestaurantThumbnail extends LitElement {
  static properties = {
    src: { type: String },
    alt: { type: String }
  }

  static styles = css`
  :host {
    max-height: max-content;
    background-size: cover;
    background-position: center;
    width: 34%;
    border-radius: 10px;
  }`

  constructor () {
    super()
    this.src = ''
    this.alt = ''
  }

  render () {
    return html`<img src="${this.src}" alt="${this.alt}">`
  }
}
customElements.define('restaurant-thumbnail', RestaurantThumbnail)
