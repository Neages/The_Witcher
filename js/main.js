var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    slidesPerView:1,
    breakpoints: {
      // when window width is >= 320px
      570: {
        slidesPerView: 2,
      }
    }
});
// ГАМБУРГЕР !!!

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function (){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})
