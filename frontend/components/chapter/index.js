import Component from '../component';
import compiledTemplate from './template.hbs';

export default class Chapter extends Component{
  constructor(options) {
    super(options.el);

    this._itemChapter = [];

  }

  setData(itemChapter) {
    this._itemChapter = itemChapter;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      itemChapter: this._itemChapter
    });
  }

}
