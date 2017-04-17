export default class MenuIcon{
  constructor(options) {
    this._el = options.el;

    this._el.addEventListener('click', this._onMenuIconClick.bind(this));
  }

  _onMenuIconClick() {
      let menu = document.querySelector('.header__main-menu_wrapper');
      menu.classList.toggle('js-toggleMenuIcon');

      let line1 = document.querySelector('.line-1');
      let line2 = document.querySelector('.line-2');
      let line3 = document.querySelector('.line-3');

      line1.classList.toggle('active-line-1');
      line2.classList.toggle('active-line-2');
      line3.classList.toggle('active-line-3');
  }
}
