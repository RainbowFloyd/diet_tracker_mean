const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/dietTracker');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

let simpleFoodSchema = mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		calCount: Number
});

let simpleFood = mongoose.model('simpleFood', simpleFoodSchema);
module.exports.simpleFood = simpleFood;

let consumedFoodSchema = mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		calCount: Number
});

let consumedFood = mongoose.model('consumedFood', consumedFoodSchema);
module.exports.consumedFood = consumedFood;

let addFood = function(foodName, calCount, callback) {
	let newFood = new simpleFood({
		_id: new mongoose.Types.ObjectId(),
		foodName: foodName,
		calCount: calCount
	})

	simpleFood.update({foodName: foodName}, {$set: {calCount: calCount}}, {upsert:true}, function(err, foodSaved) {
		if (err) {
			console.log('there was an error saving to the database', err);
		} else {
			console.log(foodSaved, ' was saved to the database');
			callback();
		}
	})
}

let getFood = function(callback) {
	simpleFood.find().exec(function(err, docs) {
		if(err) {
			console.log('There was an error getting food from db ', err)
		} else {
			callback(docs);
		}
	})
}

let trackFood = function(foodName, calCount, callback) {
	let conFood = new consumedFood({
		_id: new mongoose.Types.ObjectId(),
		foodName: foodName,
		calCount: calCount
 })

	console.log('after construction ', conFood)

	conFood.save(function(err) {
		if (err) {
			console.log('There was an error saving tracked food ', err)
		} else {
			callback();
			//this.getTrackFood(callback)
			// consumedFood.find().exec(function(err, docs) {
			// 	if (err) {
			// 		console.log('There was an error getting tracked foods ', err);
			// 	} else {
			// 		callback(docs);
			// 	}
			// })
		}
	})
}

let getTrackFood = function(callback) {
	consumedFood.find().exec(function(err, docs) {
		if (err) {
			console.log('There was an error getting tracked foods ', err);
		} else {
			callback(docs)
		}
	})
}

module.exports.getTrackFood = getTrackFood
module.exports.trackFood = trackFood
module.exports.getFood = getFood
module.exports.addFood = addFood
