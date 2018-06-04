import React from "react"
import { Route, Link } from "react-router-dom"
import { connect } from "react-redux";

class Home extends React.Component {
	render() {
		return (
			<div> 
				<h2>Welcome to the Simple ReactJS Demo! Hello <font color="blue">{ this.props.name? this.props.name: "Bro" }</font>!</h2>  
				<h4>And I guess your favourite is <font color="blue">{ this.props.favourite? this.props.favourite: "ReactJS" }</font>.</h4>
				<ul>
					<li>
						<Link to={{ pathname: '/whatsyourname', state: { defaultName: "Alexander?" } }}>Tell Me You Name</Link>
					</li>
					<li>
						<Link to={{ pathname: '/whatsyourfavourite' }}>Tell Me You Favourite</Link>
					</li>          
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { 
		name: state.reducer1.name,
		favourite: state.reducer2.favourite,
	}
}

const connectedHome = connect(mapStateToProps)(Home)

export default connectedHome