const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills__ratings-counter');
const lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach(function(item, index){
    lines[index].style.width = item.innerHTML;
    
})
