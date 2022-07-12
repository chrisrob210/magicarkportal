import React, { useState } from 'react'
import navlinks from './navlinks.json'

export default function NavList(props) {

    const [links, setLinks] = useState(createNavLinks(navlinks))
    
    function createNavLinks(props){
        let navlinks = []
        props.forEach((l,i) => {
            navlinks.push(<NavLink key={i} id={i} isActive={l.isActive} title={l.title} onClick={setActiveLink} setPage={props.setPage}/>)})
        return navlinks
    }

    function setActiveLink(title){
        let newLinks = []
        props.setPage(title)
        navlinks.forEach(link => {
            if (link.title === title)
                link.isActive = true
            else 
                link.isActive = false
            newLinks.push(link)    
        })
        setLinks(createNavLinks(newLinks))
        
    }

    return (
    <ul className="navbar-nav nav-tabs me-auto mt-2 mt-lg-0" >{links}</ul>
    )
}

function NavLink(props){
    const activeBorder = "active bg-light"
    const inactiveBorder = "bg-secondary border rounded-top border-top-1 border-start-1 border-end-1 border-bottom-0 border-dark"

    function goToPage(e){
        e.preventDefault();
        props.onClick(props.title)
    }
    return (
        <li className='nav-item'><a className={`nav-link ${props.isActive ? activeBorder : inactiveBorder}`} href={`${props.title}/`} onClick={(e) => {goToPage(e)}}>{props.title}</a></li>
    )
}
