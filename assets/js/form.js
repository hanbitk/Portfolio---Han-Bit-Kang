window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', message);
});

// SUCCESS DANGER MESSAGE 

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
            window.location = 'index.html';
        }, 3000);

        
    }
}

// SEND EMAIL GOOGLE

window.onload = function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
        var params = {
            from_name : document.getElementById('name').value,
            email_id : document.getElementById('email').value,
            message : document.getElementById('message').value
        };
    
        emailjs.send('service_711tz37', 'template_a99wywk', params).then(function (res){
            console.log('Success! ' + res.status);
        });
    })
}

// function sendMail(){
//     var params = {
//         from_name : document.getElementById('name').value,
//         email_id : document.getElementById('email').value,
//         message : document.getElementById('message').value
//     };

//     emailjs.send('service_zqvzkqi', 'template_oihu3ts', params).then(function (res){
//         console.log('Success! ' + res.status);
//     });
// };
