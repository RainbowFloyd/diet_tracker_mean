const express = require('express');
const app = express();

app.use(express.static(__dirname + '../index.html'));


app.get('/', function(req, res) {
	console.log('hello');
	res.sendStatus(200);
});

const port = 1128
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});