const input_range = document.getElementById('input_range');
const input_value = document.getElementById('input_value');
const add_btn = document.querySelectorAll('[id^="add-btn"]');
const curPage = document.getElementById('pagination').getAttribute('curpage');
const curPageButton = document.getElementById(`page-${curPage}`);

if (curPageButton) {
    curPageButton.style.backgroundColor = '#009d63';
    curPageButton.style.color = '#FFFFFF';
}

input_range.addEventListener('input', (e) => {
    console.log(e.target.value);
    input_value.innerHTML = e.target.value;
});

add_btn.forEach(async btn => btn.addEventListener('click', async (event) => {
    event.preventDefault();
    let bookId = btn.value;

    if (!bookId) {
        return alert('Hãy đăng nhập trước khi thêm vào giỏ hàng!');
    }

    const data = await fetch('/order/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bookId })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message === 'Add to cart successfully') {
            return alert('Add to cart successfully')
        }

        alert('Add to cart failed');
    }).catch(error => {
        console.log(error);
        alert(error.message);
    });
}));
