// Reproducir sonido

var sonido = new Audio();
sonido.src = "./resources/button-click.mp3"

// Scroll

var lastScrollTop = 0;
    navbar = document.getElementsByClassName("nav");
window.addEventListener("scroll", function(){
    var scrollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.opacity="0";
    }else{
        navbar.style.opacity="1";
    }
    lastScrollTop = scrollTop;
})

// Swup

import Swup from 'swup'; 
const swup = new Swup();