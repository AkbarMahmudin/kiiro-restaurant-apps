class LoadingDetail extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        loading-detail-indicator {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px 0;
        }

        .load-container {
          display: flex;
        }

        .image {
          width: 100%;
          border-radius: 10px;
        }

        .image img {
          display: block;
          width: 100%;
          height: inherit;
          object-fit: cover;
        }

        .load-body {
          padding: 16px;
          width: 100%;
        }

        h4 {
          margin: 0 0 1rem;
          font-size: 1.5rem;
          line-height: 1.5rem;
        }

        .description {
          font-size: 1rem;
          line-height: 1.4rem;
        }

        .loading .image,
        .loading h4,
        .loading .description {
          background-color: #EEEEEE50;
          background: linear-gradient(
            100deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, .5) 50%,
            rgba(255, 255, 255, 0) 60%
          ) #EEEEEE50;
          background-size: 200% 100%;
          background-position-x: 180%;
          animation: 1s loading ease-in-out infinite;
        }

        @keyframes loading {
          to {
            background-position-x: -20%;
          }
        }

        .loading h4 {
          min-height: 1rem;
          border-radius: 4px;
          animation-delay: .05s;
        }

        .loading .description {
          min-height: 3.6rem;
          border-radius: 4px;
          animation-delay: .06s;
        }

        .load-header h4.title {
          min-height: 3.6rem;
          border-radius: 4px;
          animation-delay: .05s;
        }

        .load-header .description {
          min-height: 1rem;
          border-radius: 4px;
          animation-delay: .06s;
        }

        @media screen and (min-width: 1200px) {
          .load-container {
            display: flex;
            gap: 20px;
          }

          .load-container .image {
            width: 50%;
          }
        }
      </style>
      
      <div class="load-header loading">
        <h4 class="title"></h4>
        <div class="description">
        </div>
      </div>
      <div class="load-container loading">
        <div class="image">
        </div>
        <div class="load-body">
          <h4></h4>
          <div class="description">
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('loading-detail-indicator', LoadingDetail)
