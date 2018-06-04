/* 
 * The entry point of the App 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import CustomRoutes from './routes'	//index.js will be imported if no specified file
import CustomRedux from "./redux"	//index.js will be imported if no specified file

ReactDOM.render(
	//Redux stores a cross-page data object, and "inject" it to the props of React.Component
	//Routes is for mapping pages with related url path
	<CustomRedux>
		<CustomRoutes />
	</CustomRedux>
	,document.getElementById('root') //the root element is defined in ./static/IndexTemplate.html
)