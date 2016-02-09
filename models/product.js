var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean');

var productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	category: {type: String, required: true }
});

var Product = mongoose.model('product', productSchema);

module.exports = Product;