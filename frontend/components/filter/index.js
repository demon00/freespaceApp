import Component from '../component';
import compiledTemplate from '../templates/template.hbs';

export default class Filter extends Component{
  constructor(options) {
    super(options.el);
    this._menu = options.menu;

    this._articlesComponent = document.querySelector('[data-component="articles"]');
    this._bestItem = this._el.querySelector('[data-element="best"]');
    this._lastItem = this._el.querySelector('[data-element="last"]');

    this._el.addEventListener('click', this._filterItemClick.bind(this));
    this._menu.addEventListener('click', this.filterItemMenu.bind(this));
  }

  _render(dataAfterFiltered) {
    this._articlesComponent.innerHTML = compiledTemplate({
      articles: dataAfterFiltered
    });
  }

  setData(articles) {
    this._articObj = articles;
  }

  _filterItemClick(event) {

    let articles = this._articObj;

    if(this._bestItem === event.target) {
      let filteredArt = articles.filter( article => {
        return article.itemFilter === "best";
      });

      this._render(filteredArt);
      this._bestItem.classList.add('filter__item-active');
      this._lastItem.classList.toggle('filter__item-active');
    }

    if(this._lastItem === event.target) {
      this._render(articles);
      this._bestItem.classList.remove('filter__item-active');
      this._lastItem.classList.add('filter__item-active');
    }

  }

  filterItemMenu(event) {

    let htmlPage = event.target.closest('.main-menu_link-one');
    let jsPage = event.target.closest('.main-menu_link-two');
    let phpPage = event.target.closest('.main-menu_link-three');
    let wpPage = event.target.closest('.main-menu_link-four');
    let uxPage = event.target.closest('.main-menu_link-five');
    let gitPage = event.target.closest('.main-menu_link-six');
    let seoPage = event.target.closest('.main-menu_link-seven');

    if(htmlPage) {
      this.filtering('css')
    }
    if(jsPage) {
      this.filtering('js')
    }
    if(phpPage) {
      this.filtering('php')
    }
    if(wpPage) {
      this.filtering('wp')
    }
    if(uxPage) {
      this.filtering('ux')
    }
    if(gitPage) {
      this.filtering('gh')
    }
    if(seoPage) {
      this.filtering('seo')
    }

  }

  filtering(item) {

    this._el.classList.add('js-hidden');

    let filteredArt = this._articObj.filter( article => {
      return article.marker === item;
    });

    this._render(filteredArt);
  }

}
