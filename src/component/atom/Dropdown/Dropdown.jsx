import React from 'react';
import './Dropdown.scss';

export class Dropdown extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <select id={this.props.id}>
                {this.props.options.map(option=>(
                    <option key={option} val={option}>{option}</option>
                ))}
            </select>
        )
    }
}