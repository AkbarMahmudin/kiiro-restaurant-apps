import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'

import '../views/components/fail-response'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    console.log(page)

    if (!page) {
      this._content.innerHTML = `
        <section class="content">
          <div class="container">
            <fail-response message="Page not found"></fail-response>
          </div>
        </section>`
      return
    }

    this._content.innerHTML = await page.render()
    await page.afterRender()

    // Create active page
    const [, activePage] = url.split('/')
    const menuItem = document.querySelectorAll('.nav__item')
    if (activePage === '') {
      menuItem[0].classList.add('active')
      menuItem[1].classList.remove('active')
    } else if (activePage === 'favorite') {
      menuItem[0].classList.remove('active')
      menuItem[1].classList.add('active')
    }

    const skipLinkElm = document.querySelector('#skip-link')
    skipLinkElm.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#maincontent').focus()
    })
  }
}

export default App
