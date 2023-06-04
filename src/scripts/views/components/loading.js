class Loading extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <style>
        .card {
          display: flex;
          background-color: var(--secondary);
          border-radius: 10px;
          overflow: hidden;
          width: 100%;
        }

        .image {
          max-height: max-content;
          background-size: cover;
          background-position: center;
          width: 34%;
        }

        .image img {
          display: block;
          width: 100%;
          height: inherit;
          object-fit: cover;
        }

        .card-body {
          padding: 16px;
          width: 66%;
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
          min-height: 3.6rem;
          border-radius: 4px;
          animation-delay: .05s;
        }

        .loading .description {
          min-height: 1rem;
          border-radius: 4px;
          animation-delay: .06s;
        }

        @media screen and (min-width: 650px) {
          .card {
            flex-direction: column;
          }
          
          .card .image {
            width: 100%;
            height: 200px;
          }

          .card-body {
            width: 100%;
          }
        }
      </style>
      
      <div class="card loading">
        <div class="image">
        </div>
        <div class="card-body">
          <h4></h4>
          <div class="description">
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('loading-indicator', Loading)
