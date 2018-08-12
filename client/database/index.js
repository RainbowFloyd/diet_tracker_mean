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
  // TODO: your schema here!
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		calCount: Number
});

let simpleFood = mongoose.model('simpleFood', simpleFoodSchema);
module.exports.simpleFood = simpleFood;

let consumedFoodSchema = mongoose.Schema({
  // TODO: your schema here!
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		CalCount: Number
});

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
		}
	})
	callback();
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

module.exports.getFood = getFood
module.exports.addFood = addFood
