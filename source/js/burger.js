const burger = document.querySelector('.header__list-btn--js')
const close = document.querySelector('.header__list-btn--close')
const burgerMenu = document.querySelector('.header-mobile__list')
console.log(close)

burger.addEventListener('click', function(){
	burgerMenu.classList.add('open');
})

close.addEventListener('click', function(){
	burgerMenu.classList.remove('open');
})