import React from "react"
import { connect } from "react-redux";
import { ButtonBackToRoot } from "../components" //index.js will be imported if no specified file
import { updateName } from "../redux/actions" //index.js will be imported if no specified file

class WhatsYourName extends React.Component {

	constructor(props) {
		super(props)    
		this.state = {
			name: ""
		}
		
		//React components using ES6 classes no longer autobind this
		//If the function will be passed as a callback, e.g HTML element callback, remember to use "bind" to perserve the connection between the function & this class
		//No need to bind handleValueChangeWithNewValue, as it will not be passed as a callback
		//this.handleNameChange = this.handleNameChange.bind(this) //You can also bind in the render function		
		this.handleSubmit = this.handleSubmit.bind(this)
		
		//create ref for accessing the element instead of using id tag    
		this.nameTextInputRef = React.createRef();
	}

	//called when render function is done
	componentDidMount(){    
		var defaultName = this.props.location.state? this.props.location.state.defaultName: ""	//way to get data from <Link> element in React Router v4		
		this.nameTextInputRef.current.value = defaultName
		this.handleNameChangeWithNewValue(defaultName)
	}

	handleNameChange(event) {
		this.handleNameChangeWithNewValue(event.target.value)
	}

	handleNameChangeWithNewValue(newValue) {
		this.setState({ "name": newValue })
	}	

	//depends on function passed in
	handleSubmit(event) {
		event.preventDefault()
		this.props.updateName(this.state.name)
	}
	
	render() {
		return (
			<div>
				<ButtonBackToRoot value="Back" />
				<br/>
				<p>Your name is { this.state.name }:</p>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" ref={ this.nameTextInputRef } onChange={ this.handleNameChange.bind(this) } />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateName: name => dispatch(updateName(name))
	};
};

const connectedWhatsYourName = connect(null, mapDispatchToProps)(WhatsYourName)

export default connectedWhatsYourName


