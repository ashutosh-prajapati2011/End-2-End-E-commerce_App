const express = require('express');
const router = express.Router();
const { getCart } = require('../controllers/cartController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', verifyToken, getCart);

module.exports = router;
