const express = require('express');
const getRepo = require('../helpers/github.js');
const db = require('../database/index.js');
var bodyParser = require('body-parser')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', (req, res) => {

});

app.get('/repos', function (req, res) {
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

