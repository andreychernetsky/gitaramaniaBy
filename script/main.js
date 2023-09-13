// const menuBtn = document.querySelector('.menu__btn');
// // console.log(menuBtn);
// const menu = document.querySelector('.menu__list');
// // console.log(menu);
// menuBtn.addEventListener('click',function(){
//   menu.classList.toggle('menu__list--active');
// });
// 1) Инициализируем Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',//vertical
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,//Пагинация становится кликабельной
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //автоматическое перелистывание
  autoplay:{
      delay:2000,//задержка перед перелистыванием
  }

});
