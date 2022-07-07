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

// Navbar toggle button for small screen
const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
        navbarMenu.classList.toggle('open');
});





/***********************************************************/

// ScrollReveal
ScrollReveal().reveal('#about', {duration: 2000});
ScrollReveal().reveal('#skills', {duration: 2000});
ScrollReveal().reveal('#projects', {duration: 2000});
ScrollReveal().reveal('#contact', {duration: 2000});
ScrollReveal().reveal('.project', {interval: 200});

/***********************************************************/


// Logo blinking animation

function show(){
	if (document.getElementById)
	document.getElementById("logo__off").style.visibility = "visible";
}

// blink "off" state
function hide(){
	if (document.getElementById)
	document.getElementById("logo__off").style.visibility = "hidden";
}

// toggle "on" and "off" states every 450 ms to achieve a blink effect
// end after 2000 ms
for (var i = 100; i < 2000; i = i + 350){
	setTimeout(hide, i);
	setTimeout(show, i + 100);
}

// Turn light on/off message

function showHideMessage(elem){
    const onOff = document.querySelector('#onoff');

    const showMessage = setInterval(function(){
        onOff.textContent = 'turn the light on';
        onOff.classList.add('on__off');
        clearInterval(showMessage);
    }, 1000);
    
    const hideMessage = setInterval(function(){
        elem.style.opacity = 1;
        if(elem.style.opacity == 1){
        onOff.textContent = '';
        onOff.classList.remove('on__off');
        clearInterval(hideMessage);
    }
    },1500)
}

showHideMessage(onoff);





