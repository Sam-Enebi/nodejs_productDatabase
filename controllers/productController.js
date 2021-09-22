const Product = require('../Models/Product');
exports.addProduct = async (req, res) => {
	// console.log(req.body);
	const { name, price, description, quantity } = req.body;
	const newProduct = Product.create({
		name,
		price,
		description,
		quantity,
	});

	res.redirect('products');
};

exports.getAllProducts = async (req, res) => {
	const products = await Product.find();
	res.render('products', {
		products,
	});
};
