const header__hamburger = document.getElementById("header__hamburger");
const header__hamburger__img = header__hamburger.querySelector('img');
const header__navBar = document.getElementById("header__navBar");

const services_label = document.getElementById("services_label");
const services = document.getElementById("services");

header__hamburger.addEventListener('click', ()=> {
    header__navBar.classList.toggle('hidden');
    if(!header__navBar.classList.contains('hidden')) {
        header__hamburger__img.src = './img/icons/close.svg';
    } else {
        header__hamburger__img.src = './img/icons/hamburger.svg';
    }
})

services_label.addEventListener('click', ()=> {
    services_label.classList.toggle('navItem_selected')
    services_label.classList.toggle('down')
    services.classList.toggle('hidden');
    if(!services.classList.contains('hidden')) {
        services_label.style.marginBottom= '190px'
    } else {
        services_label.style.marginBottom= '0px'
    }
})