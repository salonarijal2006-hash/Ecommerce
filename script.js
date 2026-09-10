const products = [
  { id: 1, name: "Study Notebook", price: 250 },
  { id: 2, name: "Campus Tote Bag", price: 650 },
  { id: 3, name: "Exam Snack Box", price: 400 },
  { id: 4, name: "Highlighter Set", price: 180 }
];

const cart = [];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");

function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
      <article class="card">
        <h3>${product.name}</h3>
        <p>Rs. ${product.price}</p>
        <button data-id="${product.id}">Add to cart</button>
      </article>
    `
    )
    .join("");
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = cart
    .map((item) => `<li>${item.name} — Rs. ${item.price}</li>`)
    .join("");
  cartTotal.textContent = cart.reduce((sum, item) => sum + item.price, 0);
}

productGrid.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  const product = products.find((item) => item.id === id);
  if (product) {
    cart.push(product);
    renderCart();
  }
});

cartBtn.addEventListener("click", () => {
  cartPanel.hidden = !cartPanel.hidden;
});

closeCart.addEventListener("click", () => {
  cartPanel.hidden = true;
});

renderProducts();
renderCart();
