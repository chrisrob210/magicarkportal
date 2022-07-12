import React from 'react'

export default function Value(props) {
    return (<li className='list-group-item'>{`${props.param}: ${props.value}`}</li>)
}