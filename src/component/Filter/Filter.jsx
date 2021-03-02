import React from 'react';
import './Filter.scss';

const Filter = (props)=> {

    return (
        <>
            <div className="filters-sections">
                <h3>{props.title || "No FIlter"}</h3>
                {props.options.map(item=>(
                    <div key={item.id} className="filter-option">
                        <input type="checkbox" id={item.id} onChange={()=>{props.handleChange({label: item.label, key: props.title})}} />
                        <label htmlFor={item.id}>{item.label}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Filter;