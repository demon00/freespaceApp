import Articles from '../articles';
import HttpService from '../../services/http-service';
import Search from '../search';
import Filter from '../filter';
import Menu from '../menu';
import Chapter from '../chapter';
import MenuIcon from '../menuIcon';
import Header from '../header';
import Component from '../component';

export default class Page {
  constructor(options) {
    this._el = options.el;

      this.initArticles();
      this.initSearch();
      this.initFilter();
      this.initMenu();
      this.initChapter();
      this.initMenuIcon();
      this.initHeader();
  }

  initHeader() {
    this._header = new Header({
      el: this._el.querySelector('[data-component="header"]')
    });
  }

  initMenuIcon() {
    this._menuIcon = new MenuIcon({
      el: this._el.querySelector('[data-component="menuIcon"]')
    });
  }

  initChapter() {
    this._chapter = new Chapter({
      el: this._el.querySelector('[data-component="chapter"]')
    });

    this._loadItemChapter()
  }

  initMenu() {
    this._menu = new Menu({
      el: this._el.querySelector('[data-component="menu"]')
    });

    this._loadItemMenu();
  }

  initFilter() {
    this._filter = new Filter({
      el: this._el.querySelector('[data-component="filter"]'),
      menu: document.querySelector('[data-component="menu"]')
    });

  }

  initArticles() {
    this._articles = new Articles({
      el: this._el.querySelector('[data-component="articles"]')
    });

    this._loadArticles();
  }

  initSearch() {
    this._search = new Search({
      el: this._el.querySelector('[data-component="search"]')
    });

    this._search.on('valueChanged', (event) => {
      this._query = event.detail;

      this._loadArticles(this._query)
    });
  }

  _loadArticles(query = '') {
    let url = '../data/articles.json';

    if (query) {
      url += `?query=${query}`;
    }

    HttpService.request(url, {
      method: 'GET',
      success: this._onArticlesLoaded.bind(this),
      error: this._onLoadError.bind(this)
    });
  }

  _onArticlesLoaded(articles) {

    if(!this._query) {
      this._articles.setData(articles);
      this._filter.setData(articles);
      this._header.setData(articles);
    } else {
      let query = this._query.toLowerCase();

      articles = articles.filter( article => {
        return article.name.toLowerCase().indexOf(this._query) !== -1;
      });

      this._search._showFieldFilteredArticles(articles);

    }

  }

  _loadItemMenu() {
    let url = '../data/menu.json';

    HttpService.request(url, {
      method: 'GET',
      success: this._onItemMenuLoaded.bind(this),
      error: this._onLoadError.bind(this)
    });
  }

  _onItemMenuLoaded(itemMenu) {
    this._menu.setData(itemMenu);
  }

  _loadItemChapter() {
    let url = '../data/chapter.json';

    HttpService.request(url, {
      method: 'GET',
      success: this._onItemChapterLoaded.bind(this),
      error: this._onLoadError.bind(this)
    });
  }

  _onItemChapterLoaded(itemChapter) {
    this._chapter.setData(itemChapter)
  }

  _onLoadError(error) {
    console.error(error);
  }
}