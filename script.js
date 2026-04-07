let cart = [];

const cartBtn = document.getElementById("cart-btn");
const cartDiv = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalEl = document.getElementById("total");

// abrir carrinho
cartBtn.addEventListener("click", () => {
  cartDiv.classList.toggle("active");
});

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  totalEl.textContent = "Total: R$ " + total.toFixed(2);
}

// checkout
document.getElementById("checkout").addEventListener("click", () => {
  let msg = "Olá, quero pedir:\n";

  cart.forEach(item => {
    msg += `- ${item.name}\n`;
  });

  window.open(`https://wa.me/5511922048764?text=${encodeURIComponent(msg)}`);
});