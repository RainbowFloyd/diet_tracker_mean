angular.module('app')

.service('appService', function($http) {
	this.addFood = function(foodName, calCount, callback) {
		$http.post('/addFood', {
			foodName: foodName,
			calCount: calCount,
			callback: callback
		})
		.then(function({data}) {
			console.log(data);
			callback(data);
		})
		.catch(function(err) {
			console.log(err);
		})
	}
})