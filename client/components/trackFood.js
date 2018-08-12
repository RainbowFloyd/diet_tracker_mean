angular.module('app')

.component('trackFood', {
	bindings: {
		viewObj: '<',
		submitFood: '<',
		foods: '<',
		trackFood: '<'
	},
	templateUrl: '../templates/trackFood.html'
})