class IconLabel extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.icon = this.getAttribute('icon') || ''
    this.alt = this.getAttribute('alt') || ''
    this.text = this.getAttribute('text') || ''
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          width: fit-content;
        }

        :host img {
          display: inline-block;
          margin-right: 10px;
          padding: 0;
        }
      </style>

      <img src="${this.icon}" alt="${this.alt}" />
      <span>${this.text}</span>
    `
  }
}

customElements.define('icon-label', IconLabel)
