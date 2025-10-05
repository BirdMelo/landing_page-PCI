document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const header__hamburger = document.getElementById("header__hamburger");
    const header__hamburger__img = header__hamburger?.querySelector('img');
    const header__navBar = document.getElementById("header__navBar");

    const services_label = document.getElementById("services_label");
    const services = document.getElementById("services");

    // Toggle nav hamburger
    function toggleHamburger() {
        header__navBar.classList.toggle('hidden');
        if (!header__navBar.classList.contains('hidden')) {
            header__hamburger__img && (header__hamburger__img.src = './img/icons/close.svg');
            header.style.rowGap = '200px';
        } else {
            header__hamburger__img && (header__hamburger__img.src = './img/icons/hamburger.svg');
            header.style.rowGap = '0px';
        }
    }
    header__hamburger.addEventListener('click', toggleHamburger);

    // Toggle submenu services
    function toggleServices() {
        if(window.innerWidth < 1024) {
            services_label.classList.toggle('navItem_selected');
            services_label.classList.toggle('down');
            services.classList.toggle('hidden');
            if (window.innerWidth < 740) {
                if (!services.classList.contains('hidden')) {
                    services_label.style.marginBottom = '190px';
                    header.style.rowGap = '400px';
                } else {
                    services_label.style.marginBottom = '0px';
                    header.style.rowGap = '200px';
                }
            } 
        }
    }
    services_label.addEventListener('click', toggleServices);

    // Inicializa estado: esconde nav e services no mobile
    if (window.innerWidth < 740) {
        header__navBar.classList.add('hidden');
        services.classList.add('hidden');
        if (header__hamburger__img) {
            header__hamburger__img.src = './img/icons/hamburger.svg';
        }
    }
    if(window.innerWidth >= 740) {
        header__navBar.classList.remove('hidden')
        header.style.rowGap = '0px';
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 740) { // telas maiores
            header__navBar.classList.remove('hidden');
            // services.classList.remove('hidden');
            if(header__hamburger__img) header__hamburger__img.src = './img/icons/hamburger.svg';
            header.style.rowGap = '0px';
            services_label.classList.remove('navItem_selected', 'down');
            if (!services.classList.contains('hidden')) services.classList.add('hidden');
            services_label.style.marginBottom = '0px';
        } else { //celular
            if (!header__navBar.classList.contains('hidden')) header__navBar.classList.add('hidden');
            if (!services.classList.contains('hidden')) services.classList.add('hidden');
            if(header__hamburger__img) header__hamburger__img.src = './img/icons/hamburger.svg';
            services_label.classList.remove('navItem_selected', 'down');
            header.style.rowGap = '0px';
        }
    });
});
