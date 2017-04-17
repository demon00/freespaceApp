import Page from './components/page';

let preloader = document.querySelector('.preloader');

window.onload = () => {
  preloader.classList.add('js-hidden');

  let page = new Page({
    el: document.body
  });
};