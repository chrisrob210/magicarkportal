import React from 'react'
import NavButton from './NavButton'
import NavList from './NavList'


export default function NavBar(props) {
    // Anchor listenHandler passes link to this function
    // function setActiveLink(link){
    //     if (link.dataset.link === getPageName()){
    //         //set the link class attribute
    //         document.getElementById(`item-${link.dataset.link}`).setAttribute("class", "nav-item active border rounded-top border-top-1 border-start-1 border-end-1 border-bottom-0 border-secondary")
    //     }
    //     else {
    //         console.log(`No Match Found: ${link.dataset.link} & ${getPageName()}`)
    //     }
    // }
 
    return (
    <nav className="navbar navbar-expand-sm  m-0 p-0 pt-2 navbar-light bg-dark">
        <div className="row-fluid w-75 mx-auto border border-top-0 border-start-0 border-end-0">
            <div className="col w-auto">
                <NavButton />
                <NavList setPage={props.setPage}/>
            </div>
        </div>
    </nav>
  )
}