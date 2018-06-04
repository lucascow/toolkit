import React from "react"
import { Link }  from "react-router-dom"


class TextInputWithSubmit extends React.Component {

	constructor(props) {
		super(props)    
		this.state = {
			value: "",
			defaultValue: this.props.defaultValue
		}

		//React components using ES6 classes no longer autobind this
		//If the function will be passed as a callback, e.g HTML element callback, remember to use "bind" to perserve the connection between the function & this class
		//No need to bind handleValueChangeWithNewValue, as it will not be passed as a callback
		this.handleSubmit     = this.handleSubmit.bind(this)
		this.handleValueChange = this.handleValueChange.bind(this)

		//create ref for accessing the element instead of using id tag    
		this.textInputRef = React.createRef();
	}

	//called when render function is done
	componentDidMount(){    
		var defaultValue = this.props.defaultValue? this.props.defaultValue: ""
		this.textInputRef.current.value = defaultValue
		this.handleValueChangeWithNewValue(defaultValue)
	}

	handleValueChange(event) {
		var newValue = event.target.value
		this.handleValueChangeWithNewValue(newValue);
	}

	//depends on function passed in
	handleSubmit(event) {
		event.preventDefault()
		this.props.submitCallback(this.state.value)
	}

	//depends on function passed in
	handleValueChangeWithNewValue(newValue) {
		this.setState({ "value": newValue })
		this.props.valueChangeCallback(newValue)
	}	

	render() {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" ref={ this.textInputRef } onChange={ this.handleValueChange } />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default TextInputWithSubmit