angular.module('app')

.component('trackFood', {
	bindings: {
		viewObj: '<',
		submitFood: '<',
		foods: '<'
	},
	templateUrl: '../templates/trackFood.html'
})