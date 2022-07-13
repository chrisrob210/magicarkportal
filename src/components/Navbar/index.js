import React from "react";
import { Nav, NavList, NavListLinks,NavLink, NavMenu, NavButton } 
    from "./NavbarElements";
  
const Navbar = () => {
  //recreating the bootstrap navbar
  return (
    <>
      <Nav className="navbar navbar-expand-sm  m-0 p-0 pt-2 navbar-light bg-dark">
        <NavMenu className="row-fluid w-75 mx-auto border border-top-0 border-start-0 border-end-0">
        <div className="col w-auto">
        <NavButton />
        <NavList links={[
          <NavLink to="/" className="nav-link">Home</NavLink>,
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
          ]} />
        </div>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;