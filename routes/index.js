var Product = require('../models/product.js');

exports.index = function(req, res) {	

	res.render('index');
};

exports.lista = function(req, res){

	Product.find({}, function(err, products){
		res.json({products: products});
	});
};

exports.grava = function(req, res){
	
	var product = new Product(req.body);
	
	product.save(function(err, product) {
		res.send(product);
	});
};

exports.deleta = function(req, res){
	
	var id = req.params.id;
	
	Product.findByIdAndRemove(id, function(err, product){
		res.send('The product (' + product.name + ') was removed!');
	});
};

exports.atualiza = function(req, res){
	
	var id = req.body._id;
	delete req.body._id;
	
	Product.findByIdAndUpdate(id, req.body, function(err, product){
		res.send('The product (' + product.name + ') was updated!!');
	});
};