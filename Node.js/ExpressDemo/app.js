/*
 * A template to set up a simple server with Express.
 * How to run:
 * 		In terminal, type "node app.js". The server is running at port 3000
 */

var express 	= require('express')
var app 		= module.exports = express();
var bodyParser 	= require('body-parser');
var multer 		= require('multer'); // v1.0.5
var upload 		= multer(); 		 // for parsing multipart/form-data

app.use(bodyParser.json()); 						// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(require('./routes'));						// for all routes

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
