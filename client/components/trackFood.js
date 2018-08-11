angular.module('app')

.component('trackFood', {
	bindings: {
		viewObj: '<',
	},
	templateUrl: '../templates/trackFood.html'
})