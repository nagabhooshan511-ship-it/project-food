const form = document.getElementById('orderForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
const form = document.getElementById('orderForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value;
    const food = form.food.value;
    const quantity = form.quantity.value;

    confirmation.textContent = `Thank you, ${name}! Your order of ${quantity} ${food}(s) has been received.`;
    form.reset();
});










