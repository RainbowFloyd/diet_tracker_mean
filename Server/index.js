const express = require('express');
const app = express();

app.use(express.static(__dirname + `/../client`));
app.use(express.static(__dirname + '/../node_modules'));


app.get('/', function(req, res) {
	res.sendStatus(200);
});

const port = 1128
app.listen(port, function() {
	console.log(`listening on port ${port}`);
});