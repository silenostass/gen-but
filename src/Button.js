import React from 'react';

class Button extends React.Component {
	render() {
		// if (typeof this.props.style !== 'undefined') {
		// 	console.log(document.getElementById('button').style.cssText);
		// }
		return(
			<div className="button-cont">
				<button
					className='button' 
					style={this.props.style}
					onClick={this.props.onClick}>
					{this.props.value}
				</button>
			</div>
		);
	}
}

export default Button;