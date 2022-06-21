'use strict';

const cursor = document.querySelector('.mousepointer');
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// } );

document.addEventListener('mousemove', function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});