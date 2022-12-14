import React, { Component } from "react";
import { Body, Footer, Header } from "./components";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <Body />
      </>
    );
  }
}

export default App;
