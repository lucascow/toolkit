import React from "react"
import { ButtonBackToRoot } from "../components" //index.js will be imported if no specified file

/*
 * ReactJS supports functional component, i.e. no need to extends from React.Component, if you want something simple & stateless.
 * const About = () => () is the function declaration short form for const About = function(){return ()}
 */
const About = () => (
	<div>
		<ButtonBackToRoot value="Back" />
		<p>This is simple ReactJS project. The Benifits of ReactJS:</p>
		<ul>
			<li>Reusable Components</li>
			<li>Performance</li>
			<li>Well-Organised</li>
		</ul>    
	</div>
)

export default About


