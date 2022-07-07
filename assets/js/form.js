window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', message);
});


function message(e){
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');
    const success = document.querySelector('#success');
    const danger = document.querySelector('#danger');

    danger.style.display = 'none';
    success.style.display = 'none';

    if(name.value === '' || email.value === '' || message.value === ''){
        danger.style.display = 'block';
    }else{

        success.style.display = 'block';

        setTimeout(() => {
            name.value = '';
            email.value = '';
            message.value = '';
            window.location = 'form.html';
        }, 3000);

        
    }
}
