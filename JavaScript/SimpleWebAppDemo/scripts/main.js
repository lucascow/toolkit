/**
 * Simple Web App Demo
 */
'use strict';

// Define the class of WebApp
function WebApp() {
	//define class properties
	this.greeting1 = "Hello World! Write JS in OOP style."
	this.greeting2 = "This is not ES6. Let's rock without something like funciton.bind(this)."
};

// Init
WebApp.prototype.init = function() {
	//demo call 1
	this.debugMsg(this.greeting1);

	//demo call 2
	//don't use `this` in callback function
	var _this = this;
	setTimeout(
		function() {
			_this.debugMsg(_this.greeting2);
		}, 
		1000);		
};

// Debug
WebApp.prototype.debugMsg = function(msg) {
	console.log(msg);		
};	

// Auto Run the Webapp
// Put this at the buttom to ensure all properties & methods are loaded
// (function() {
// 	window.WebApp = new WebApp();
// })();
window.onload = function() {
	window.WebApp = new WebApp();
	window.WebApp.init();
};

