/*
 *
 * To translate traditional chinese to simplified chinese, vice versa.
 * Support around 8000 Chinese Character! Expandable! Simple implementation!
 * 
 *
 * (c) Lucas YU <lucasyu8.developer@gmail.com>
 *
 * Non-ES6 syntax, no Babel needs
 */

/* internal */
const scDictionary = require ("./simplifiedChineseSource.js");
const tcDictionary = require ("./traditionalChineseSource.js");
const chineseReg   = new RegExp("^[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]$"); 

function translator(direction, words) {

	/* 1. Decide the dictionary. */
	var dictionaryFrom;
	var dictionaryyTo;
	switch (direction) {
		case "toSc":
			dictionaryFrom = tcDictionary;
			dictionaryTo   = scDictionary;
			break;
		case "toTc":
			dictionaryFrom = scDictionary;
			dictionaryTo   = tcDictionary;
			break;
	}

	/* 
	 * 2. Loop char in input string & ouput each corresponding result.
	 *    Embrace the char with () if no found.
	 *    Do nothing to non-chinese char
	 */
	var returnWords = "";
	for (let word of words) {
		if (chineseReg.test(word)) {
		  	var index = dictionaryFrom.indexOf(word);
		  	returnWords += (index > -1)? dictionaryTo[index]: `(${word})`;			
		} else {
		  	returnWords += word
		}
	}	
	return returnWords;

}

/* export */
module.exports.toTc = function(words) {

	return translator("toTc", words);

};

module.exports.toSc = function(words) {

	return translator("toSc", words);

};
