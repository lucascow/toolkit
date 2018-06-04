import React from "react"
import { Link }  from "react-router-dom"

/*
 * ReactJS supports functional component, i.e. no need to be a sub class of React.Component, if you want something simple, faster, stateless.
 * const ButtonBackToRoot = (props) => () is the function declaration short form for const ButtonBackToRoot = function(){return ()}
 * const ButtonBackToRoot = (props) => () is also the short form for const ButtonBackToRoot = (props) => {return ()}
 */
const ButtonBackToRoot = (props) => (  
	<button>
		<Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}> 
			{props.value}
		</Link>
	</button>
)

export default ButtonBackToRoot