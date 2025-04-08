fetch('http://localhost:5000/api/products')  // Update with your backend port
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      list.innerHTML += `
        <div class="col-md-4">
          <div class="card mb-3">
            <img src="${p.image}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">Price: ₹${p.price}</p>
              <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
            </div>
          </div>
        </div>
      `;
    });
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart');
}
