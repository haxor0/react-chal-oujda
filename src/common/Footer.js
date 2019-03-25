import React from "react";
import logo from "../bootstrap-solid.svg";
const Footer = ({ date, features = [], resources = [], about = [] }) => (
  <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={logo} alt="" width="24" height="24" />
        <small className="d-block mb-3 text-muted">{date}</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          {features.map((element, index) => (
            <li key={index}>
              <a className="text-muted" href={element.link}>
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          {resources.map((element, index) => (
            <li key={index}>
              <a className="text-muted" href={element.link}>
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          {about.map((element, index) => (
            <li key={index}>
              <a className="text-muted" href={element.link}>
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
