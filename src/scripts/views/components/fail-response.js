class FailResponse extends HTMLElement {
  connectedCallback () {
    this.title = this.getAttribute('title') || 'Oops..'
    this.message = this.getAttribute('message') || 'Failed to load data'
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        fail-response {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          width: 100%;
          border-radius: 10px;
          background-color: #3A475020;
          color: #FFFFFF;
          font-weight: bold;
          margin: 30px auto;
        }
      </style>

      <div class="fail-response">
        <h2 class="fail-response__title">${this.title}</h2>
        <p class="fail-response__tagline">${this.message}</p>
      </div>
    `
  }
}

customElements.define('fail-response', FailResponse)
