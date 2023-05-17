const input_range = document.getElementById('input_range');
const input_value = document.getElementById('input_value');
const add_btn = document.querySelectorAll('[id^="add-btn"]');
const curPage = document.getElementById('pagination').getAttribute('curpage');
const curPageButton = document.getElementById(`page-${curPage}`);

if (curPageButton) {
    curPageButton.style.backgroundColor = '#009d63';
    curPageButton.style.color = '#FFFFFF';
}

function notification(status, msg) {
    let alert = document.getElementById("Alert");
    alert.innerHTML = msg;
    alert.style.color = "white";

    alert.style.position = "fixed";
    alert.style.top = "30px";
    alert.style.right = "0px";

    if (status === "success") {
        alert.style.backgroundColor = "green";
    }
    else if (status === "processing") {
        alert.style.backgroundColor = "blue";
        alert.innerHTML = "Đang xử lý...";
    } else if (status === "error") {
        alert.style.backgroundColor = "red";
    }

    alert.classList.add("showAlert");

    setTimeout(() => {
        alert.classList.remove("showAlert");
    }, 1000);
}

input_range.addEventListener('input', (e) => {
    console.log(e.target.value);
    input_value.innerHTML = e.target.value;
});

add_btn.forEach(async btn => btn.addEventListener('click', async (event) => {
    event.preventDefault();
    let bookId = btn.value;

    notification('processing', 'Đang xử lý...');

    if (!bookId) {
        return notification('error', 'Thêm vào giỏ hàng thất bại');
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
            return notification('success', 'Thêm vào giỏ hàng thành công');
        }

        notification('error', 'Hãy đăng nhập để thêm vào giỏ hàng, hoặc sản phẩm đã có trong giỏ hàng!');
    }).catch(error => {
        console.log(error);
        notification('error', 'Hãy đăng nhập để thêm vào giỏ hàng, hoặc sản phẩm đã có trong giỏ hàng!');
    });
}));
