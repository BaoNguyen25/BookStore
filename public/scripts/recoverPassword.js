const submit_btn = document.getElementById('submit-btn');

submit_btn.addEventListener('click', async (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const token = document.getElementById('token').value;
    const url = submit_btn.getAttribute('url');

    let messageSection = document.getElementById('message');
    messageSection.innerHTML = 'Đang xử lý';
    messageSection.style.color = 'blue';

    if (password == '' || token == '') {
        messageSection.innerHTML = 'Hãy điền vào hết các trường';
        messageSection.style.color = 'red';
        return;
    }

    submit_btn.disabled = true;

    const data = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, token })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message == 'Password changed successfully') {
                messageSection.innerHTML = 'Đã thay đổi mật khẩu, sẽ chuyển hướng sang trang đăng nhập sau 5 giây';
                messageSection.style.color = 'green';

                setTimeout(() => {
                    window.location.href = '/access/signin';
                }, 5000);
            } else {
                messageSection.innerHTML = 'Đã có lỗi xảy ra';
                messageSection.style.color = 'red';
            }

            submit_btn.disabled = false;
        });
});