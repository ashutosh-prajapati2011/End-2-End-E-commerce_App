const db = require('../config/db');

exports.getAllProducts = async (req, res) => {
  try {
    const [products] = await db.execute("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
