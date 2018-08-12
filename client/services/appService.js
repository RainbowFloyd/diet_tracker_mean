angular.module('app')

.service('appService', function($http) {
	this.addFood = function(foodName, calCount) {
		$http.post('/addFood', {
			foodName: foodName,
			calCount: calCount,
		})
		.then(function({data}) {
			console.log(data);
			console.log('Service then')
		})
		.catch(function(err) {
			console.log(err);
		})
	}
})