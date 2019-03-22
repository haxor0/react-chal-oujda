import React from "react";

const Header = ({ appTitle, navLinks = [] }) => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 className="my-0 mr-md-auto font-weight-normal">{appTitle}</h5>
    <nav className="my-2 my-md-0 mr-md-3">
      {navLinks.map((link, index) => (
        <a className="p-2 text-dark" href={link.href} key={index}>
          {link.title}
        </a>
      ))}
    </nav>
    <a className="btn btn-outline-primary">Sign up</a>
  </div>
);

export default Header;
