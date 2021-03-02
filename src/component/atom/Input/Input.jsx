import React from 'react';
import './Input.scss';

class Input extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <input type="text" id={this.props.id} placeholder={this.props.placeholder} />
        ) 
    }
}

export default Input;