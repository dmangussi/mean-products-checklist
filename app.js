var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.get('/', routes.index);
app.get('/lista', routes.lista);
app.post('/grava', routes.grava);
app.delete('/product/:id', routes.deleta);
app.put('/product', routes.atualiza);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('The server was started', server.address().port);
});