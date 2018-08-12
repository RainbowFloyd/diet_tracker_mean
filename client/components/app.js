angular.module('app')
.controller('appCtrl', function(appService) {
	this.calCount = 0;
	this.foods = [];
	this.consumed = [];

	this.$onInit = function() {
		this.getFood();
		this.getTrackFood();
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
		appService.addFood(food, calCount, function() {
			this.getFood();
		}.bind(this));
	}.bind(this);

	this.getFood = function() {
		appService.getFood(function(data) {
			this.foods = data.data;
		}.bind(this));
	}.bind(this);

	this.trackFood = function(food) {
		appService.trackFood(food.foodName, food.calCount, function () {
			this.getTrackFood();
		}.bind(this))
	}.bind(this);

	this.getTrackFood = function() {
		appService.getTrackFood(function(data) {
			this.consumed = data.data;
			let count = 0;
			for (let i = 0; i < this.consumed.length; i++) {
				count += this.consumed[i].calCount
			}
			this.calCount = count;
		}.bind(this))
	}.bind(this)

})

.component('app', {
	bindings: {},
	controller: 'appCtrl',
	templateUrl: '../templates/app.html'
})