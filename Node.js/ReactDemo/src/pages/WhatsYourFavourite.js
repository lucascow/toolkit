import React from "react"
import { connect } from "react-redux";
import { ButtonBackToRoot, TextInputWithSubmit } from "../components" //index.js will be imported if no specified file
import { updateFavourite } from "../redux/actions"  //index.js will be imported if no specified file

class WhatsYourFavourite extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: ""
		}
	}

	handleValueChange(value) {
		this.setState({ "value": value })
	}

	render() {
		return(
		  	<div>
				<ButtonBackToRoot value="Back" />
				<br/>
				<p>Your favourite is { this.state.value }:</p>
				<TextInputWithSubmit	question="What's you favourite?" 
								 		submitCallback={ this.props.updateFavourite.bind(this) } 
								 		valueChangeCallback={ this.handleValueChange.bind(this) }
								 		defaultValue="ReacJS?" />
		  	</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateFavourite: favourite => dispatch(updateFavourite(favourite))
	};
};

const connectedWhatsYourFavourite = connect(null, mapDispatchToProps)(WhatsYourFavourite)

export default connectedWhatsYourFavourite
