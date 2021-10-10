import React from 'react';

class CoordinatesButton extends React.Component {

    handleOnClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    };

    render() {
        return (
            <button onClick={this.handleOnClick}> 
            Coordinates Button
            </button>
             )
        }
}
export default CoordinatesButton;