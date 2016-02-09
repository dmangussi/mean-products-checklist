var Product = require('./models/product');

var product = new Product({
	name: 'Produt to Insert',
	category: 'Category to Insert'
});

product.save(function(erro, product){
	if(erro) console.log(erro);
	
	console.log('Storing product ' + product.name);
});