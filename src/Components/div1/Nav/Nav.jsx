import React from "react";
import Button from "./button/button";
import Dropdown from "./Dropdown/dropdown";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <img 
      width = "8%"
      height= "auto"
      src="./../../../resources/images/Group 5.png"></img>
        {/* <a className="navbar-brand text-light" href="#">
          Navbar
        </a> */}
        
        <div className="nav1">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="home-text nav-link text-dark active "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item  dropdown dropdown-center">
              <Dropdown />
            </li>
            <li>
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
