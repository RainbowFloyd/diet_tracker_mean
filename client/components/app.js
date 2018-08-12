angular.module('app')
.controller('appCtrl', function(appService) {
	this.calCount = 0;
	this.foods = [];

	this.$onInit = function() {
		this.getFood()
	}

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
		appService.addFood(food, calCount);
	};

	this.getFood = function() {
		appService.getFood(function(data) {
			this.foods = data;
		});
	}
})

.component('app', {
	bindings: {},
	controller: 'appCtrl',
	templateUrl: '../templates/app.html'
})