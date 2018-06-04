/*
 *	Style 3: A Demo to provide pure function for orgainizing routes of a centralized style
 */

/*
 * @PARAM 	N/A
 * @RETURN 	A array of string, providing all professors' name
 */
module.exports.getList = function() {
	var studentList = ['Professor Bon', 'Professor Gumball', 'Professor Dave'];
	return studentList;
};

/*
 * @PARAM 	A string, contatining "name" of the professor
 * @RETURN 	A string, providing the description of the professor
 */
 module.exports.getDescriptionByName = function(name) {
	var description = `No description data for ${name}.`;
	return description;
};