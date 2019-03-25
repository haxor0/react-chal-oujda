import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ appTitle, navLinks = [] }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">{appTitle}</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      {navLinks.map((link, index) => (
        <NavLink className="p-2 text-dark" to={link.link} key={index}>
          {link.title}
        </NavLink>
      ))}
    </nav>
    <a className="btn btn-outline-primary" href=".">
      Sign up
    </a>
  </div>
);

export default Header;
