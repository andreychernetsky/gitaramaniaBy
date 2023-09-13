const menuBtn = document.querySelector('.menu__btn');
// console.log(menuBtn);
const menu = document.querySelector('.menu__list');
// console.log(menu);
menuBtn.addEventListener('click',function(){
  menu.classList.toggle('menu__list--active');
});
