// Page refresh
history.scrollRestoration = 'manual';
    if(history.scrollRestoration){
        history.scrollRestoration = 'manual';
    }else{
        window.onbeforeunload = function(){
            window.scrollTo(0,0);
        };
    };

/***********************************************************/

// Fix Navbar
var scrollpos = window.scrollY;
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

/***********************************************************/

// Change image on click - logo off and on
window.addEventListener("DOMContentLoaded", function () {
    const powerBtn = document.querySelector('.power__btn');
    powerBtn.addEventListener('click', changeLogo);
});

function changeLogo(){
    const logoOff = document.getElementById('logo__off');
    if(logoOff.src.match("/assets/images/logo/thin_light_logo.png")){
        logoOff.src = "/assets/images/logo/thin_green_logo.png";
    }else{
        logoOff.src = "/assets/images/logo/thin_light_logo.png";
    }
}

/***********************************************************/

// ScrollReveal
ScrollReveal().reveal('#about', {duration: 2000});
ScrollReveal().reveal('#skills', {duration: 2000});
ScrollReveal().reveal('#projects', {duration: 2000});
ScrollReveal().reveal('#contact', {duration: 2000});
ScrollReveal().reveal('.project', {interval: 200});