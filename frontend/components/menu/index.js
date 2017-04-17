import Component from '../component';
import compiledTemplate from './template.hbs';

export default class Menu extends Component{
  constructor(options) {
    super(options.el);

    this._itemMenu = [];
    this._el.addEventListener('click', this._onItemMenuClick.bind(this));
  }

  setData(itemMenu) {
    this._itemMenu = itemMenu;
    this._render();
  }

  _render() {
    this._el.innerHTML = compiledTemplate({
      itemMenu: this._itemMenu
    });
  }

  _searchItemClass() {

    this._allItemMenu = this._el.firstChild.childNodes;

    for(let i = 0; i < this._allItemMenu.length; i++) {
      let child = this._el.firstChild.childNodes[i];

      let typeChild = child.nodeType;
      if(typeChild === 1) {
        child.firstElementChild.classList.remove('main-menu_link-active');
        if(!this._menuLink){
          return;
        }
        this._menuLink.classList.add('main-menu_link-active');
      }
    }
  }

  _toggleItemChapter(page) {

    let chapter = document.querySelector('[data-component="chapter"]');

    chapter.classList.remove('js-hidden');

    let allItemPages = document.querySelectorAll('.header__item-menu');

    allItemPages.forEach((index) => {
      index.classList.add('js-hidden');
    });

    page.classList.remove('js-hidden');
  }

  _onItemMenuClick(event) {

   // Click on Item menu
   this._menuLink = event.target.closest('.header__main-menu_link');

   this._searchItemClass();

   this._htmlPage = event.target.closest('.main-menu_link-one');
   this._jsPage = event.target.closest('.main-menu_link-two');
   this._phpPage = event.target.closest('.main-menu_link-three');
   this._wpPage = event.target.closest('.main-menu_link-four');
   this._uxPage = event.target.closest('.main-menu_link-five');
   this._gitPage = event.target.closest('.main-menu_link-six');
   this._seoPage = event.target.closest('.main-menu_link-seven');

   let anyItemMenu = event.target.closest('.header__main-menu_link');

   if(anyItemMenu) {
     let mainPage = document.querySelector('.header__item-main-page');
     mainPage.classList.add('js-hidden');
   }

   if(this._htmlPage) {
     this._onHtmlItemClick();
   }
   if(this._jsPage) {
     this._onJsItemClick();
   }
   if(this._phpPage) {
     this._onPhpItemClick();
   }
   if(this._wpPage) {
     this._onWpItemClick();
   }
   if(this._uxPage) {
     this._onUxItemClick();
   }
   if(this._gitPage) {
     this._onGitItemClick();
   }
   if(this._seoPage) {
     this._onSeoItemClick();
   }

  }

  _onHtmlItemClick() {
    let page = document.querySelector('.header__item-csshtml-page');
    this._toggleItemChapter(page);
  }

  _onJsItemClick() {
    this._jsPage.classList.add('main-menu_link-active-js');
    let page = document.querySelector('.header__item-js-page');
    this._toggleItemChapter(page);
  }

  _onPhpItemClick() {
    this._phpPage.classList.add('main-menu_link-active-php');
    let page = document.querySelector('.header__item-php-page');
    this._toggleItemChapter(page);
  }

  _onWpItemClick() {
    this._wpPage.classList.add('main-menu_link-active-wp');
    let page = document.querySelector('.header__item-wp-page');
    this._toggleItemChapter(page);
  }

  _onUxItemClick() {
    this._uxPage.classList.add('main-menu_link-active-ux');
    let page = document.querySelector('.header__item-ux-page');
    this._toggleItemChapter(page);
  }

  _onGitItemClick() {
    this._gitPage.classList.add('main-menu_link-active-gh');
    let page = document.querySelector('.header__item-gh-page');
    this._toggleItemChapter(page);
  }
  _onSeoItemClick() {
    this._seoPage.classList.add('main-menu_link-active-seo');
    let page = document.querySelector('.header__item-seo-page');
    this._toggleItemChapter(page);
  }

}
