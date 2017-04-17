import compiledTemplate from '../templates/template.hbs';

export default class Header {
  constructor(options) {
    this._el = options.el;
    this._articlesComponent = document.querySelector('[data-component="articles"]');

    this._el.addEventListener('click', this._onHeaderClick.bind(this));
  }

  setData(articles) {
    this._articles = articles;
  }

  _render() {
    this._articlesComponent.innerHTML = compiledTemplate({
      articles: this._articles
    });
  }

  _onHeaderClick(event) {
    let logo = event.target.closest('.header__logo-link');

    if(logo) {
      this._onLogoClick();
    }

  }

  _onLogoClick() {

    window.location.hash = '';

    let mainPage = document.querySelector('.header__item-main-page');

    mainPage.classList.remove('js-hidden');

    let chapter = document.querySelector('[data-component="chapter"]');

    chapter.classList.add('js-hidden');

    this._searchItemClass();

    let filter = document.querySelector('[data-component="filter"]');

    filter.classList.remove('js-hidden');

    this._render();
  }

  _searchItemClass() {

    let itemMenu = document.querySelectorAll('.header__main-menu_link');

    itemMenu.forEach((index) => {
      index.classList.remove('main-menu_link-active')
    });

  }
}
