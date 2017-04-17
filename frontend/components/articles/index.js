import Component from '../component';
import compiledTemplate from '../templates/template.hbs';

export default class Articles extends Component{
  constructor(options) {
    super(options.el);

    this._articles = options.articles || [];

    this._el.addEventListener('click', this._onArticleClick.bind(this));
  }

  setData(articles) {
    this._articles = articles;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      articles: this._articles
    });
  }

  _onArticleClick(event) {
    let currentEl = event.target.closest('.main__content_article-link');

    let valueCounter = currentEl.querySelector('.article-views-value');

    let valueCounterInner = Number(valueCounter.innerHTML);

    valueCounter.innerHTML = valueCounterInner + 1;

    this._articles[0].counter = valueCounterInner + 1;
  }

}