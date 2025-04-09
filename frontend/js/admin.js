document.getElementById("addProductForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const productData = {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      stock: form.stock.value
    };
  
    const res = await fetch("http://localhost:5000/api/products/admin/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Add Authorization header if JWT is used
      },
      body: JSON.stringify(productData)
    });
  
    const result = await res.json();
    alert(result.message);
    form.reset();
  });
  