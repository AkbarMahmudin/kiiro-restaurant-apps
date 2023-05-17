import { LitElement, css, html } from 'lit-element'

class SimpleGreeting extends LitElement {
  static properties = {
    name: {}
  }

  static styles = css`
  :host {
    color: blue;
    width: 100%;
    height: 44px;
    margin: 50px auto;
    display: block;
    position: relative;
  }`

  constructor () {
    super()
    this.name = 'World'
  }

  render () {
    return html`<p>Hello ${this.name}!</p>`
  }
}

customElements.define('simple-greeting', SimpleGreeting)

export { SimpleGreeting }
