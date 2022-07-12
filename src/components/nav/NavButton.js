import React, { useState } from 'react'

export default function NavButton(props) {
    const [state] = useState({showNav: true})
    
    function toggleNav() {
        state = !state.showNav
    }

    return (
        <button className="navbar-toggler d-lg-none" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
        </button>
  )
}
