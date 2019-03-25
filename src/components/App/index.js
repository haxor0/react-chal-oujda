import React, { Component } from "react";

import Header from "common/Header";
import Footer from "common/Footer.js";
import Home from "pages/Home";
import Contact from "pages/Contact";
import About from "pages/About";
import NotFound from "pages/NotFound";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import navList from "mocks/navList";
import featuresList from "mocks/featuresList";
import resourcesList from "mocks/resourcesList";
import aboutList from "mocks/aboutList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header appTitle="Haxor Soft" navLinks={navList} />
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about-us" component={About} />
            <Route component={NotFound} />
          </Switch>

          <Footer
            date="&copy; ilyass maamri 2017-2019"
            features={featuresList}
            resources={resourcesList}
            about={aboutList}
          />
        </div>
      </Router>
    );
  }
}

export default App;
