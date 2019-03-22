import React, { Component } from "react";

import Header from "common/Header";

import navList from "mocks/navList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header appTitle="Sqli App" navLinks={navList} />
      </div>
    );
  }
}

export default App;
