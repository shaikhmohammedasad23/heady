var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');
var mongoose = require('mongoose');



var app = express();
app.use(bodyparser.urlencoded({limit: "50mb", extended: true,  parameterLimit:50000}));
app.use(bodyparser.json({limit: "50mb"}));



<!--Mongose connection-->
mongoose.connect('mongodb://localhost/categoryproduct', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
<!--Mongose connection-->


<!--CORBA-->
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
<!--CORBA-->
app.set('tokenSecret', 'secr3t');
app.use(express.static(path.join(__dirname, './www')));

app.get('/', function(req, res) {
	res.send('Hello! The API is up and running');
});

routes.configure(app);
var server = app.listen(5000, function() {
  console.log('Server listening on port ' + server.address().port);
});