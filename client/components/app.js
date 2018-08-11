angular.module('app')
.controller('appCtrl', function($scope) {
	this.calCount = 0;

	this.viewObj = {
		onScreen: {
			addFood: false,
			trackFood: false,
		},
		currentView: '',
		updateScreen: function(view) {
			this.onScreen[this.currentView] = false;
			this.onScreen[view] = true;
			this.currentView = view;
		}
	}

	this.submitFood = function(food, calCount) {
		console.log('food submitted')
	};
})

.component('app', {
	bindings: {},
	controller: 'appCtrl',
	templateUrl: '../templates/app.html'
})