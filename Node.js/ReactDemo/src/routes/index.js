/*
 * React Router is for mapping pages with related url path
 * Note:
 * 		1.) Define all pages and its path inside the Switch tag. And router will decide which page to be displayed based on the url.
 * 		2.) Elements must be added inside the div tag, and only 1 top div tag for the return function.
 * 		3.) Elements added outside Switch tag will be shown in every page.
 */
import React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import { Home, About, WhatsYourName, WhatsYourFavourite } from '../pages' //index.js will be imported if no specified file

class RoutesConfigs extends React.Component {

	componentWillUpdate(nextProps, nextState) {
		//Note: This will be invoked everytime when routing happens
	}

	render() {
		return (
			<div>
				<Switch>								
					<Route exact path="/" 					component={ Home }/>
					<Route exact path="/about" 				component={ About } />
					<Route exact path="/whatsyourname"		component={ WhatsYourName } />
					<Route exact path="/whatsyourfavourite"	component={ WhatsYourFavourite } />
				</Switch>			
			</div>
		)
	}
}	

const CustomRoutes = () => ( 
	//BASE_NAME is defined in /build_configs/PreprocessConfig.js, i.e. https://host/#/BASE_NAME
	//Since HashRouter is applied, there is a "#" sign betweewn host & base, in order to support directly visiting via pages besides home
	<HashRouter basename={ BASE_NAME }>
		<Route component={ RoutesConfigs } />
	</HashRouter>
);

// Deprecated: componentWillUpdate will NOT be invoked. One possible explanation is: BrowserRouter/HashRouter... is not regarded as a Component
// class CustomRoutesDeprecated extends React.Component {
//
// 	componentWillUpdate(nextProps) {
// 		//Attention!!!
// 	}
//
// 	render() {
// 		return (
// 			<HashRouter basename={BASE_NAME}>
// 				<Switch>
// 					<Route exact path="/" 			component={Home} />
// 					<Route exact path="/about" 		component={About} />
// 					<Route exact path="/intro" 		component={Intro} />
// 				</Switch>
// 			</HashRouter>
// 		)
// 	}
// };

export default CustomRoutes