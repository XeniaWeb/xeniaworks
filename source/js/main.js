var navMain = document.querySelector('.main-nav');
var navOpen = document.querySelector('.page-header__btn-nav');
var navClose = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navOpen.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
});

navClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});
