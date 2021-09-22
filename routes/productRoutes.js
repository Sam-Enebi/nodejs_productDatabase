const express = require('express');

const router = express.Router();

const {
	addProduct,
	getAllProducts,
} = require('../controllers/productController');

router.post('/addProduct', addProduct);

router.get('/products', getAllProducts);

module.exports = router;
