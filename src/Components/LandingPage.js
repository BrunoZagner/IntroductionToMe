import React from 'react';
import Slide from './Slide.js';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.setScrollRange(0, 3);
        this.props.setUnblockEvent(this.onUnblock);
    }

    isHidden = (index) => {
        return index < this.props.scrollIndex;
    }

    getSlide = (hidden, direction, backgroundColor, textColor, text) => {
        return <Slide hidden={hidden} direction={direction} backgroundColor={backgroundColor} textColor={textColor} text={text} />;
    }

    onUnblock = () => { if(this.props.scrollIndex >= 3) this.props.setPage("test"); }

    render() {


        return (
            <div>
                {this.getSlide(this.isHidden(2), "top", "#27586B", "#022735", "Genießen Sie ihren Aufenthalt.")}
                {this.getSlide(this.isHidden(1), "left", "#7D2A68", "#3F002F", "Auf dieser Seite finden Sie alles was sie über mich wissen müssen.")}
                {this.getSlide(this.isHidden(0), "right", "#AA4B39", "#550D00", "Hi, Ich bin Bruno.")}
            </div>
        )
    }
}

export default LandingPage;