import React from 'react';
import './css/Slide.css';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.handleTransition = this.handleTransition.bind(this);
    } 

    handleTransition = (event) => {
        console.log("asdf");
    }

    getSlideClass = () => { return "Slide "+(this.props.hidden ? "hidden-"+this.props.direction : "shown"); }

    getStyleProps = () => { return {backgroundColor: this.props.backgroundColor, color: this.props.textColor}; }

    render() {
        return(
            <div className={this.getSlideClass()} style={this.getStyleProps()}>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default Slide;
