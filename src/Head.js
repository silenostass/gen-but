import  React from "react";
import ReactDOM from "react-dom";

const headRoot = document.head;

class Head extends React.Component {
 	render() {
    return ReactDOM.createPortal(this.props.children, headRoot);
  }
}

export default Head;