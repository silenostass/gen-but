import React from 'react';
	
const def = 'width: 144px;\nheight: 60px;\ncursor: pointer;\noutline: none;\nfont-size: 19px;\n';

class Textarea extends React.Component { 

		toCSSText() {
			if (typeof this.props.style === 'undefined') {
				return '.button {\n' + def + ' border: 1px solid #000\n background-color: #ccc;\n}';
			}

			const fontFamily = ` font-family: '${this.props.style.fontFamily}', sans-serif;\n`;
			const backgroundColor = ` background-color: ${this.props.style.backgroundColor};\n`;
			const color = ` color: ${this.props.style.color};\n`;
			const border = (typeof this.props.style.border !== 'undefined') ?
								    ` border: ${this.props.style.border};\n`:
								    '';
			const borderRadius = (typeof this.props.style.borderRadius !== 'undefined') ?
			 					  ` border-radius: ${this.props.style.borderRadius};\n` :
			     				  '';
			const boxShadow = ` box-shadow: ${this.props.style.boxShadow};\n`;

			return '.button {\n' + def + fontFamily + backgroundColor + color + border + borderRadius + boxShadow + '}';
		}

		render() {
			const CSSText = this.toCSSText();
			return(
			<div className="textarea-cont">
				<textarea value={CSSText} readOnly>
				</textarea>
			</div>
			);
		}
}


export default Textarea;