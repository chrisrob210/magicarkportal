import React, { useState } from 'react'

export default function Input(props) {
    const [value, setValue] = useState(props.value)

    function handleChange(event){
        setValue(event.target.value)
        props.onChange(value)
    }
    
    return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
        <span className="input-group-text">{props.label}</span>
        </div>
    <input type={props.type} className="form-control" onChange={handleChange} value={value} />
    </div>
)
}
