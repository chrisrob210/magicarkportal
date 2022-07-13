import React, { useState } from 'react'

export default function ListItem(props) {
    return (
    <li className={`${props.className} ${props.isActive=== true ? "active" : ""}`} onClick={()=>props.onClick(props.id)}>{props.name}</li>
    )
}
