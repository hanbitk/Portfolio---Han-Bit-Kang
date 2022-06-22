// Page refresh
history.scrollRestoration = 'manual';
    if(history.scrollRestoration){
        history.scrollRestoration = 'manual';
    }else{
        window.onbeforeunload = function(){
            window.scrollTo(0,0);
        };
    };

// Fix Navbar
var scrollpos = window.scrollY;
var nav = document.querySelector('nav');


window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});


// ScrollReveal
ScrollReveal().reveal('#about', {duration: 2000});
ScrollReveal().reveal('#skills', {duration: 2000});
ScrollReveal().reveal('#projects', {duration: 2000});
ScrollReveal().reveal('#contact', {duration: 2000});
ScrollReveal().reveal('.project', {interval: 200});