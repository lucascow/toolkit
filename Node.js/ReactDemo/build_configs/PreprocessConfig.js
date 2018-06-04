/* 
 * This config aims to export a json to DefinePlugin of webpack.config.babel
 * Changes in this file may require re-transpilations(i.e. restart the server) as it is a preprocess mechanism
 */

const prod = {
	"process.env": {
		"NODE_ENV": JSON.stringify("production")
	},
	"BASE_NAME": JSON.stringify("ReactDemo/dist")	//need to config it to your final dist parh, i.e. https://host/#/BASE_NAME/index.html
};

const dev = {
	"process.env": {
		"NODE_ENV":  JSON.stringify("development")
	},
	"BASE_NAME": JSON.stringify("ReactDemo/dist")	//need to config to it your final dist parh, i.e. https://host/#/BASE_NAME/index.html
};

export default (process.env.ENV_CONFIG === "production")? prod: dev;	//ENV_CONFIG is set in package json