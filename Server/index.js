const express = require('express');
const bodyParser = require('body-parser');
const db = require(__dirname + '/../client/database/index.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + `/../client`));
app.use(express.static(__dirname + '/../node_modules'));

db.getFood(function(data) {
	console.log('got this back ', data);
})

app.post('/addFood', function(req, res) {
	let food = req.body.foodName;
	let calCount = Number(req.body.calCount);
	db.addFood(food, calCount, function() {
		res.sendStatus(200);
	});
})

app.get('/trackFood', function(req, res) {
	db.getFood(function(data) {
		console.log('got this back ', data);
		res.send(data);
	})
})

const port = 1128
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});