import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import StatementContainer from "./components/StatementContainer";
// import AnnotationsContainer from "./components/AnnotationsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StatementContainer />
        {/* <AnnotationsContainer /> */}
      </div>
    );
  }
}

export default App;
