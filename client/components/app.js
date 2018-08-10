angular.module('app')
.controller('appCtrl', function($scope) {
	this.calCount = 0
})

.component('app', {
	bindings: {},
	controller: 'appCtrl',
	templateUrl: '../templates/app.html'
})