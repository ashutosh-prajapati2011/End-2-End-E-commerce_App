const db = require('../config/db');

exports.getCart = async (req, res) => {
  const userId = req.user.userId;
  try {
    const [cart] = await db.execute("SELECT * FROM cart WHERE user_id = ?", [userId]);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
