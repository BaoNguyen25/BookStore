'use strict';

const SignUpBtn = document.getElementById('SignUpBtn');

SignUpBtn.addEventListener('click', async() => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    let messageSection = document.getElementById('message');
    messageSection.innerHTML = 'Đang xử lý';
    messageSection.style.color = 'blue';

    if (!email || !password || !name || !gender || !address || !phone) {
        messageSection.innerHTML = "Vui lòng nhập đầy đủ thông tin";
        messageSection.style.color = 'red';
        return;
    }

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
                messageSection.innerHTML = "Đăng ký thành công, chuyển về trang đăng nhập sau 3 giây";
                return setTimeout(() => {
                    window.location.href = '/access/signin';
                }, 3000);
            }

            messageSection.innerHTML = "Email đã tồn tại";
            messageSection.style.color = 'red';
        })
        .catch(err => {
            messageSection.innerHTML = "Đăng ký thất bại, hãy thử lại sau";
            messageSection.style.color = 'red';
        });
});