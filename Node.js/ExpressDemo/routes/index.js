const router = require('express').Router();

/*
 * Middleware:
 * 		All requests will be processed here first. You can log data, handle auth....
 */
 var timer = function (req, res, next) {
  console.log('Time:', Date.now());
  next();
};
var logger = function (req, res, next) {
  console.log('Logger:', Date.now());
  next();
};
router.use([timer, logger]);



/*
 * Routes Style 1:
 * 		Define the routes(like /students/list) during the api implementation
 */
router.use('/students',						require('../api/students.js'));

/*
 * Routes Style 2:
 * 		Centralize all routes
 */
var	apiColleges = require('../api/colleges.js');
router.use('/colleges/list', 				apiColleges.getList);
router.use('/colleges/:name/ranking', 		require('../api/colleges.js').getCollegeRankingByName);


/*
 * Routes Style 3:
 * 		Centralize all routes, calling pure functions
 */
var	apiProfessors = require('../api/professors.js');
router.use('/professors/list', 				function(req, res){
	var result = apiProfessors.getList();
	res.send(result);
});

router.use('/professors/:name/description', function(req, res){
	var result = apiProfessors.getDescriptionByName(req.params.name);
	res.send(result);
});



module.exports = router;
