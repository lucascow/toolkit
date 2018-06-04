/* 
 * Attention! Try to Edit Config Files in /configs First.
 * Since Node.js cannot not fully support ES6 (2015) at this moment, 10th, April, 2018
 * If you use "webpack.config.js" to config the webpack, you need to use non-es6 syntax, i.e. use "require" for dependencies.
 */
 
import webpack 			 	from 'webpack';
import path 			 	from 'path';
import HtmlWebpackPlugin 	from 'html-webpack-plugin';
import CustomWebpackConfig	from './build_configs/CustomWebpackConfig.js';
import PreprocessConfig		from './build_configs/PreprocessConfig.js';

var config = {
	entry: CustomWebpackConfig.ENTRY,
	output: {
		path: CustomWebpackConfig.BUILD_DIR,
		filename: 'bundle.js'
	},
	devServer: {
		port: CustomWebpackConfig.DEV_PORT,
		compress: true,
		contentBase: CustomWebpackConfig.SRC_DIR,
		watchContentBase: true,
		publicPath: '/',
		historyApiFallback: true,
  		clientLogLevel: "error"
	},
	module: {
	  rules: [	  	
	    {
	    	/* For transpiling the project es6 .js files */
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react"]
				}
			}
	    },	    
		{
			/* For transpiling css files */
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}    
	  ]
	},
	plugins: [
		new webpack.DefinePlugin(
			/* 
			 * Based on official doc, providing json here allows you to define global varaiable.
			 * Actually, it's achieved with the preprocessor. For example, it treats js files as pure text, and replace all keys in the js files with the value stated here, then output a final js file.
			 * As a result, remember to add escaped quote for string value, i.e. { "stringKey": JSON.stringify("stringValue") }
			 */
			PreprocessConfig
		),
		new HtmlWebpackPlugin({
		  /* For automatically generating a "index.html" file to target file, based on the template file provided */
		  title   : CustomWebpackConfig.APP_NAME,
		  template: CustomWebpackConfig.HTML_TMPL
		})
	]	
};

export default config;