angular.module('app')

.component('navBar', {
	bindings: {
		viewObj: '<',
	},
	templateUrl: '../templates/navBar.html'
})