/*
 * react-redux helps connect React & Redux
 * Redux will:
 * 		1.) Store a cross-page data object
 * 		2.) "Inject" the data object to the props of React.Component (use "connect" & "mapStateToProps" function, example page: Home.js)
 * 		3.) "Inject" the setter to the props of React.Component (use "connect" & "mapDispatchToProps" function, example page: WhatsYourFavourite.js/WhatsYourName.js)
 *
 * To use redux, we need
 * 		1.) Provider	(Provide redux wtih a store)
 * 		2.) Store 		(Gather reducers & middleware)
 * 		3.) Reducer 	(Setter of the cross-page data object based on json objects from action)
 * 		4.) Middleware 	(Trigger before action)
 * 		5.) Actions 	(A simple function returning a json object, indicating command type & payload)
 */

import React from "react"
import { Provider } from "react-redux"
import Store from "./stores"	//index.js will be imported if no specified file

const CustomRedux = (props) => (
	<Provider store={ Store }>
		{ props.children }
	</Provider>
)

export default CustomRedux