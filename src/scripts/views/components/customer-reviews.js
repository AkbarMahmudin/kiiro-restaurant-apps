class CustomerReviews extends HTMLElement {
  constructor () {
    super()
    this._reviews = []
  }

  get reviews () {
    return this._reviews
  }

  set reviews (reviews) {
    this._reviews = reviews
    this.render()
  }

  _reviewsList () {
    const reviewsList = this._reviews.map(({
      name,
      date,
      review
    }) => `
        <article class="review-item">
          <header class="review-item__header">
            <strong class="review-item__name">${name}</strong>
            <time class="review-item__date">${date}</time>
          </header>
          <div class="review-item__body">
            <p>${review}</p>
          </div>
        </article>
      `
    ).join('')

    return reviewsList
  }

  render () {
    this.innerHTML = `
      <style>
        customer-reviews {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .review-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 23px;
          border-radius: 10px;
          border: 2px solid #EEEEEE50;
        }

        .review-item__header {
          display: flex;
          align-items: flex-start;
          margin: 0;
        }

        .review-item__name {
          color: #EEEEEE98;
          font-size: 18px;
          margin: 12px 0;
          font-weight: 600;
        }

        .review-item__date {
          color: #EEEEEE50;
          font-size: 16px;
          font-style: italic;
        }
        
        @media screen and (min-width: 1200px) {
          customer-reviews {
            max-height: 532px;
            padding-right: 20px;
            overflow: auto;
          }

          customer-reviews::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: var(--secondary);
          }

          customer-reviews::-webkit-scrollbar {
            width: 6px;
            background-color: var(--secondary);
          }

          customer-reviews::-webkit-scrollbar-thumb {
            background-color: var(--primary);
          }
        }
      </style>

      ${this._reviewsList()}
    `
  }
}

customElements.define('customer-reviews', CustomerReviews)
