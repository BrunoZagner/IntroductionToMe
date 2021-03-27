import React from 'react';
import './css/slide.css';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          background_color: props.background_color,
        };
      }

    render() {
        return(
            <div className="Slide" style={"background-color:"+this.props.background_color}>
               <p >
Test
               </p>
            </div>
        );
    }
}

export default Slide;