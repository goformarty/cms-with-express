var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Meow wow');
});

app.get('/marty', function(req, res) {
    res.send('Hey Marty');
});

app.listen(3000, function () {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});