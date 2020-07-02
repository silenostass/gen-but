import React from 'react';
import Button from './Button';
import Input from './Input';
import Head from './Head';
import Textarea from './Textarea';
import Info from './Info';
import {generateColor, generateBorder, generateBoxShadow, generateBorderRadius} from './funcs.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: undefined,
			value: 'Click!',
			items: [],
		}

		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	getFontLink() {
		if (typeof this.state.style !== 'undefined') {
			return `https://fonts.googleapis.com/css2?family=${this.state.style.fontFamily.replace(/ /g, '+')}`;
		}
		return;
	}

	handleOnClick(e) {
		const fontFamily = this.state.items[Math.floor(Math.random() * (this.state.items.length))].family;
		this.setState({
			style: {
				backgroundColor: generateColor(),
				color: generateColor(),
				border: generateBorder(),
				borderRadius: generateBorderRadius(),
				boxShadow: generateBoxShadow(),
				fontFamily: fontFamily,
			}
		});
	}

	handleOnChange(e) {
		this.setState( {value: e.target.value} )
	}

	shouldComponentUpdate(nextProps, nextState) {
		return ( this.state.items.length === 0 ) ? false : true;
	}

	componentDidMount() {
		fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA2kn3E-dctUbSen4txqiGCPRsBy-sgJOY')
			.then(res => res.json())
			.then(
				(res) => {
					this.setState({
						items: res.items,
					});
				}
			)
	}

	render() {
		console.log('aaaa');
		const fontLink = this.getFontLink();
		return(
			<>
			<Head>
				<link rel="stylesheet" href={fontLink ? fontLink : undefined} />
			</Head>
			<header>
				<h1>Hilarious button generator</h1>
			</header>
			<main>
				<Textarea style={this.state.style}/>
				<div className="button-input-cont">
				<Button 
					style={this.state.style} 
					onClick={this.handleOnClick}
					value={this.state.value}/>
				<Input 
					onChange={this.handleOnChange}
					value={this.state.value}/>
				</div>
				<Info value={fontLink}/>
			</main>
			</>
		);
	}
}

export default App;
