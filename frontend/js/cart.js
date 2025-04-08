async function fetchCart() {
    const token = localStorage.getItem('token');
  
    const res = await fetch('/api/cart', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
  
    const items = await res.json();
    const container = document.getElementById('cart-items');
  
    container.innerHTML = '';
  
    items.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
      `;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', fetchCart);
  