angular.module('app')

.component('trackFood', {
	bindings: {
		viewObj: '<',
		submitFood: '<'
	},
	templateUrl: '../templates/trackFood.html'
})