
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onlick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.Multiple-text', {
      strings: ['Frontend Designer.', 'Web Designer', 'App Designer', 'Programmer.'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });
