const db = require('../config/db');

// ✅ Public: Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.execute("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔒 Admin: Add new product
exports.addProduct = async (req, res) => {
  const { name, category, price, stock } = req.body;
  try {
    await db.execute(
      "INSERT INTO products (name, category, price, stock) VALUES (?, ?, ?, ?)",
      [name, category, price, stock]
    );
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✏️ Admin: Update product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, price, stock } = req.body;
  try {
    await db.execute(
      "UPDATE products SET name=?, category=?, price=?, stock=? WHERE id=?",
      [name, category, price, stock, id]
    );
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ Admin: Delete product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM products WHERE id=?", [id]);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
