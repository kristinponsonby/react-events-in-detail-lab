import React from 'react';

class DelayedButton extends React.Component {


    handleOnClick = (e) => {
        e.persist();
        window.setTimeout(() => {
        this.props.onDelayedClick(e);
        }, this.props.delay);
      };
    

    render() {
        return (
            <button onClick={this.handleOnClick}>
            Delayed Button
            </button>
             )
        }
}

export default DelayedButton;