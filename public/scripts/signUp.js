'use strict';

const SignUpBtn = document.getElementById('SignUpBtn');

SignUpBtn.addEventListener('click', async() => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    const data = await fetch('/access/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            name,
            gender,
            address,
            phone
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.message === "Sign up successfully") {
                alert(data.message);
                return setTimeout(() => {
                    window.location.href = '/access/signin';
                }, 3000);
            }

            alert(data.message)
        })
        .catch(err => console.log(err));
});