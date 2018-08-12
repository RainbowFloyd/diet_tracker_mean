angular.module('app')

.service('appService', function($http) {
	this.addFood = function(foodName, calCount) {
		$http.post('/addFood', {
			foodName: foodName,
			calCount: calCount,
		})
		.then(function({data}) {
			console.log(data);
			console.log('Service then ', data)
		})
		.catch(function(err) {
			console.log(err);
		})
	}

	this.getFood = function(callback) {
		$http.get('/trackFood')
		.then(function({data}) {
			console.log('service data ', data);
			callback({data});
		})
		.catch(function(err) {
			console.log(err);
		})
	}
})