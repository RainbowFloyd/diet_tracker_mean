const express = require('express');
const app = express();

app.use(express.static(__dirname + `/../client`));


app.get('/', function(req, res) {
	console.log('hello');
	console.log(__dirname)
	res.sendStatus(200);
});

const port = 1128
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});