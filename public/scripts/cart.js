const delete_btn = document.querySelectorAll('[id^="delete-btn"]');
const input = document.querySelectorAll('[id^="quantity-"]');
let detail = document.querySelectorAll('[id^="detail-"]');
const total_price = document.getElementById('total-price');
const submit_btn = document.getElementById('submit-btn');

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

const updateTotalPrice = () => {
  let total = 0;

  const prices = document.querySelectorAll('[id^="price-"]');

  prices.forEach((price) => {
    const quantity = document.getElementById(`quantity-${price.id.split('-')[1]}`).value;
    total += parseInt(price.innerHTML) * parseInt(quantity);
  });

  total_price.innerHTML = total;
}

input.forEach((input) => {
  input.addEventListener('change', (event) => {
    updateTotalPrice();
  })
});

delete_btn.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    event.preventDefault();

    const bookId = btn.value;

    const data = await fetch('/order/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId }),
    }).then((res) => res.json())
    .then(async (data) => {
      if (data.message === 'Delete from cart successfully') {
        
        const order = btn.id.split('-')[2];
        const div = document.getElementById(`detail-${order}`);
        div.remove();

        updateTotalPrice();
        detail = document.querySelectorAll('[id^="detail-"]');
        return notification('success', 'Xóa sản phẩm ra khỏi giỏ hàng thành công');
      }

      notification('error', 'Xóa sản phẩm ra khỏi giỏ hàng thất bại')
    });
  });
});

submit_btn.addEventListener('click', async (event) => {
  event.preventDefault();
  const bookQuantity = {};

  detail.forEach((div) => {
    const Id = div.id.split('-')[1];

    const bookId = document.getElementById(`delete-btn-${Id}`).getAttribute('value');
    const quantity = document.getElementById(`quantity-${Id}`).value;
    bookQuantity[bookId] = quantity;
  });

  if (Object.keys(bookQuantity).length === 0) {
    return notification('error', 'Giỏ hàng trống');
  }

  const data = await fetch('/order/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bookQuantity }),
  }).then((res) => res.json())
  .then(async (data) => {
    if (data.message === 'Submit order successfully') {
      notification('success', 'Đặt hàng thành công');
      window.location.href = '/user/cart';
      return;
    }

    notification('error', 'Đặt hàng thất bại');
  });
});

updateTotalPrice();