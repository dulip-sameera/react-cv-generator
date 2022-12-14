import React, { Component } from "react";
import { Body, Footer, Header } from "./components";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default App;
