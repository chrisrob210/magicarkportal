import React from 'react'

export default function Button(props) {
  return (
    <button type='button' className={`btn btn-${props.className}`} onClick={props.onClick}>{props.label}</button>
  )
}