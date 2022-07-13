import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav``;
  
export const NavLink = styled(Link)`&.active {font-weight: bold;}`;
  
export const Bars = styled(FaBars)``;
  
export const NavMenu = styled.div``;

export const NavUl = styled.ul``;

//Need to put a li element around each NavLink
export const NavList = (props) =>{
  let links = props.links
  
  //iterates through each NavLink and wraps it in a li element
  function listLinks(){
    let liLinks = []
    links.forEach(link => {
      liLinks.push(<li key={liLinks.length}className="bg-secondary rounded-top">{link}</li>)
    })
    return liLinks
  }
  return (<NavUl className="navbar-nav nav-tabs me-auto mt-2 mt-lg-0">{listLinks()}</NavUl>)
}

export const NavButton = () => {
  const [state] = useState({showNav: true})
  function toggleNav (){
    state = !state.showNav
  }
  return (<button className="navbar-toggler d-lg-none" type="button" onClick={toggleNav}>
  <span className="navbar-toggler-icon"></span>
  </button>)
}
