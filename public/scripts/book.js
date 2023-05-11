const input_range = document.getElementById('input_range');
const input_value = document.getElementById('input_value');

input_range.addEventListener('input', (e) => {
    console.log(e.target.value);
    input_value.innerHTML = e.target.value;
});
