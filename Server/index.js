const express = require('express');
const bodyParser = require('body-parser');
const db = require(__dirname + '/../client/database/index.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + `/../client`));
app.use(express.static(__dirname + '/../node_modules'));


app.get('/', function(req, res) {
	res.sendStatus(200);
});

app.post('/addFood', function(req, res) {
	console.log('req ', req.body);
	res.sendStatus(200);
})

const port = 1128
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});