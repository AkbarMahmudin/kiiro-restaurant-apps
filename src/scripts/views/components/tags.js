class Tags extends HTMLElement {
  constructor () {
    super()
    this._categories = []
  }

  get categories () {
    return this._categories
  }

  set categories (categories) {
    this._categories = categories
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._categories.forEach(category => {
      this.innerHTML += `
        <span class="tags">${category.name}</span>
      `
    })
  }
}

customElements.define('restaurant-tags', Tags)
