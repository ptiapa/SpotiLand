const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#barra-menu');

btnMenu.addEventListener('click',function(){
    menu.classList.toggle('show')
})