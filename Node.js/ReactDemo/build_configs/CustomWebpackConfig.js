const prod = {
	"APP_NAME" 	: "",
	"DEV_PORT" 	: 8080,
	"SRC_DIR"  	: __dirname + "/../src",
	"BUILD_DIR"	: __dirname + "/../dist",
	"ENTRY"  	: __dirname + "/../src/index.js",
	"HTML_TMPL" : __dirname + "/../src/static/IndexTemplate.html"
};

const dev = {
	"APP_NAME" 	: "",
	"DEV_PORT" 	: 8080,
	"SRC_DIR"  	: __dirname + "/../src",
	"BUILD_DIR"	: __dirname + "/../dist",
	"ENTRY"  	: __dirname + "/../src/index.js",
	"HTML_TMPL" : __dirname + "/../src/static/IndexTemplate.html"
};

export default (process.env.ENV_CONFIG === "production")? prod: dev;