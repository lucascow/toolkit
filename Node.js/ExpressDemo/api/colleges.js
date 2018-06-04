/*
 *	Style 2: A Demo to provide api for orgainizing routes of a centralized style
 */

var apiTools 	  = require("../tools/apiTools.js");

/*
 * @PARAM 				req, res
 * @Get Data From req   N/A
 * @Send Data Via res	A array of string, providing all college name
 */
module.exports.getList = function(req, res) {
	var collegeList = ['Habour', 'Yellow', 'Canbish'];
	apiTools.sendJson(res, collegeList);
};

/*
 * @PARAM 				req, res
 * @Get Data From req   A url query param "name", providing the name of the college
 * @Send Data Via res	A string, providing the ranking of the college
 */
module.exports.getCollegeRankingByName = function(req, res) {	
	res.send(`No ranking data for ${req.params.name}.`);
};
