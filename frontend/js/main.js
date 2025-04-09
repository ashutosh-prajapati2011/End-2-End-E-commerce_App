fetch('http://localhost:5000/api/products')  // Make sure backend is running
  .then(res => {
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  })
  .then(products => {
    const list = document.getElementById('product-list');
    if (products.length === 0) {
      list.innerHTML = `<p class="text-center">No products available.</p>`;
    } else {
      products.forEach(p => {
        list.innerHTML += `
          <div class="col-md-4">
            <div class="card mb-3 shadow">
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
    }
  })
  .catch(err => {
    console.error("Error loading products:", err);
    document.getElementById('product-list').innerHTML = `<p class="text-danger text-center">Failed to load products.</p>`;
  });

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('✅ Product added to cart!');
}
