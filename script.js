//HEADER

//VARIAVEIS
const header = document.querySelector("header");
const header__hamburger = document.getElementById("header__hamburger");
const header__hamburger__img = header__hamburger.querySelector('img');
const header__navBar = document.getElementById("header__navBar");

const services_label = document.getElementById("services_label");
const services = document.getElementById("services");

//EVENTO ABRINDO O HAMBURGER
header__hamburger.addEventListener('click', ()=> {
    header__navBar.classList.toggle('hidden');
    if(!header__navBar.classList.contains('hidden')) {
        header__hamburger__img.src = './img/icons/close.svg';
        header.style.rowGap = "200px"
    } else {
        header__hamburger__img.src = './img/icons/hamburger.svg';
        header.style.rowGap = "0px"
    }
})

//EVENTO ABRINDO OS SERVIÇOS
services_label.addEventListener('click', ()=> {
    services_label.classList.toggle('navItem_selected')
    services_label.classList.toggle('down')
    services.classList.toggle('hidden');
    if(!services.classList.contains('hidden')) {
        services_label.style.marginBottom= '190px'
        header.style.rowGap = "400px"
    } else {
        services_label.style.marginBottom= '0px'
        header.style.rowGap = "200px"
    }
})