angular.module('catalogo')
	.controller('ProductController', function ($http, $scope){
	
	$http.get('/lista').success(function(retorno){
		$scope.products = retorno.products;
	});
	
	function Product() {
		this.name = "";
		this.category = "" ;
	}
	
	$scope.product = new Product();
	
	var addProduct = function(){
		$http.post('/grava', $scope.product)
			.success(function(retorno){
			$scope.products.push(retorno);
			$scope.product = new Product();
		});
	}
	
	var updateProduct = function(){
		$http.put('/product', $scope.product).success(function(){
			$scope.product = new Product();
		});
	}
	
	$scope.showProduct = function(product){
		$scope.productSelected = product;
	}
	
	$scope.deleteProduct = function(product){
		$http.delete('/product/' + product._id).success(function(retorno){
			$scope.productSelected = null;
			
			console.log($scope.produts);
			
			var index = $scope.produts.indexOf(product);
			$scope.products.splice(index, 1);
		});
	}	
	
	$scope.editProduct = function(product){
		$scope.product = product;
	}		
	
	$scope.sendProduct = function(){
		if($scope.product._id){
			updateProduct();
		} else {
			addProduct();
		}
	}
})