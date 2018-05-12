var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var path = require('path');
var https = require('https');
var randomstring = require("randomstring");
var querystring = require('querystring');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({ defaultLayout:'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('start', {});
});

app.get('/about', function(req, res) {
  res.render('about', {});
});

app.listen(port, function () {
  console.log('BurgerCoin app listening on port ' + port + '!');
});
