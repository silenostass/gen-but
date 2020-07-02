const borderStyles = [
	'none', 
	'hidden', 
	'dotted', 
	'dashed', 
	'solid', 
	'double', 
	'groove',
	'ridge',
	'inset',
	'outset'
];


function generateBorder() {
	const style = borderStyles[Math.floor(Math.random() * (borderStyles.length))];
	if (style === 'none') {
		return undefined;
	}
	const width = Math.floor(Math.random() * 6) + 1;
	const color = generateColor();
	return `${width}px ${style} ${color}`;

}
function generateBoxShadow() {
	const hOffset = generatePx(15, true);
	const vOffset = generatePx(15, true);
	const color = generateColor();

	const blur = (Math.random() > 0.3) && generatePx(15) + 1;
	const spread = (Math.random() > 0.3) && generatePx(5, true) + 1;
	const isInset = (Math.random() > 0.5);

	const res = (
		`${hOffset}px ${vOffset}px${blur ? ' '+ blur + 'px' : ''}${spread ? ' '+ spread + 'px' : ''} ${color}${isInset ? ' inset' : ''}`
		);
	 return res;
}

function generateBorderRadius() {
	const radius = (Math.random() > 0.5) && generatePx(50) + 1;
	return (radius ? radius + '%' : undefined);
}

//general functions

function generateColor() {
	const hue = generatePx(360);
	const saturation = generatePx(100);
	const lightness = generatePx(100);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generatePx(px, wNeg = false) { //also ok with %
	let res = Math.floor(Math.random() * (px + 1))
	if(wNeg) {
	 	if (Math.random() > 0.5) {
	 		return -res;
	 	}
	}
	return res;	
}

export {generateColor, generateBorder, generateBoxShadow, generateBorderRadius};