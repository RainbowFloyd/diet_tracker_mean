let simpleFoodSchema = mongoose.Schema({
  // TODO: your schema here!
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		calCount: Number
});

let consumedFoodSchema = mongoose.Schema({
  // TODO: your schema here!
		_id: mongoose.Schema.Types.ObjectId,
		foodName: String,
		CalCount: Number
});