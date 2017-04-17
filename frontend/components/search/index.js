import Component from '../component';
import compiledTemplate from './template.hbs';

export default class Search extends Component{
  constructor(options) {
    super(options.el);

    this._field = this._el.querySelector('#inputSearch');
    this._fieldFiltered = this._el.querySelector('[data-element="filteredArticles"]');

    this._el.addEventListener('mouseenter', this._onInputMouseover.bind(this));
    this._field.addEventListener('input', this._onFieldInput.bind(this));
  }

  _onInputMouseover(event) {

    event.target.addEventListener('mouseleave', (event) => {

      if(this._field.value === '') {
        this._field.classList.add('js-searchHide');
      }

    });

    if(event.target !== this._el) {
      return;
    }
    this._field.classList.remove('js-searchHide');
    this._field.classList.add('js-searchShow');

  }

  _onFieldInput() {
    this._trigger('valueChanged', this._field.value);

    let fieldFilteredSearch = this._fieldFiltered.querySelector('.field__filtered-articles');

    if(this._field.value === '') {
      fieldFilteredSearch.classList.add('js-hidden');
    }
  }

  _render() {

    this._fieldFiltered.innerHTML = compiledTemplate({
      articles: this.filteredArtcl
    });
  }

  _showFieldFilteredArticles(articlesFiltered) {
       this.filteredArtcl = articlesFiltered;

         this._render();
  }

}
