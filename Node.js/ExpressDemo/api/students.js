/*
 *	Style 1: A Demo to organise the routes when implementing api
 */

var routerStudent = require('express').Router();
var apiTools 	  = require("../tools/apiTools.js");

/*
 * @URL 	/students/list
 * @PARAM 	N/A
 * @RETURN 	A array of string, providing all students name
 */
routerStudent.get('/list', function(req, res) {
	var studentList = ['David', 'Steven', 'Bill'];
	apiTools.sendJson(res, studentList);
});

/*
 * @URL 	/students/description
 * @PARAM 	a json, providing a field "name".
 * @RETURN 	A string, providing the description of the student
 */
routerStudent.post('/description', function(req, res) {
	//	req.params.param_name if for application/json or application/x-www-form-urlencoded
	res.send(`No description data for ${req.body.name}.`);
});

/*
 * @URL 	/students/:name/mark
 * @PARAM 	A url query parm, providing "name"
 * @RETURN 	A string, providing the mark of the student
 */
routerStudent.get('/:name/mark', function(req, res) {
	//	req.params.param_name if for application/json or application/x-www-form-urlencoded
	res.send(`No mark data for ${req.params.name}.`);
});

module.exports = routerStudent;