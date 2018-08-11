angular.module('app')

.component('addFood', {
	bindings: {
		submitFood: '<',
	},
	templateUrl: '../templates/addFood.html'
})