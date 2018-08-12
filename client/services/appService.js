angular.module('app')

.service('appService', function($http) {
	this.addFood = function(foodName, calCount, callback) {
		$http.post('/addFood', {
			foodName: foodName,
			calCount: calCount,
		})
		.then(function({data}) {
			console.log('Service then ', {data})
			callback();
		})
		.catch(function(err) {
			console.log(err);
		})
	}

	this.getFood = function(callback) {
		$http.get('/trackFood')
		.then(function({data}) {
			console.log('service data ', {data});
			callback({data});
		})
		.catch(function(err) {
			console.log(err);
		})
	}

	this.trackFood = function(foodName, calCount, callback) {
		$http.post('/trackFood', {
			foodName: foodName,
			calCount: calCount
		})
		.then(function({data}) {
			console.log('trackFood data ', {data})
			callback()
		})
		.catch(function(err) {
			console.log(err)
		})
	}

	this.getTrackFood = function(callback) {
		$http.get('/getTracked')
		.then(function({data}) {
			callback({data});
		})
		.catch(function(err) {
			console.log(err);
		})
	}
})