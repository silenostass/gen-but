import React from 'react';

function Input(props) {
	return(
		<div className="input-cont">
			<input 
			value={props.value}
			onChange={props.onChange}
			maxLength="12"/>
		</div>
	);
}

export default Input;