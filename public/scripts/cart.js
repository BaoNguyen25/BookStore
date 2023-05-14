const delete_btn = document.querySelectorAll('[id^="delete-btn"]');
const input = document.querySelectorAll('[id^="quantity-"]');
const detail = document.querySelectorAll('[id^="detail-"]');
const total_price = document.getElementById('total-price');
const submit_btn = document.getElementById('submit-btn');

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
        alert('Delete from cart successfully');
        //delete div 
        const order = btn.id.split('-')[2];
        const div = document.getElementById(`detail-${order}`);
        div.remove();

        updateTotalPrice();
        return;
      }

      alert('Delete from cart failed');
    });
  });
});

submit_btn.addEventListener('click', async (event) => {
  event.preventDefault();
  const bookQuantity = {};

  detail.forEach((div) => {
    const Id = div.id.split('-')[1];
    const bookId = document.getElementById(`delete-btn-${Id}`).value;
    const quantity = document.getElementById(`quantity-${Id}`).value;
    bookQuantity[bookId] = quantity;
  });

  if (Object.keys(bookQuantity).length === 0) {
    alert('No book in cart');
    return;
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
      alert('Submit order successfully');
      window.location.href = '/user/cart';
      return;
    }

    alert('Submit order failed');
  });
});

updateTotalPrice();