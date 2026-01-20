function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const item = cart.find(product => product.name === name);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

