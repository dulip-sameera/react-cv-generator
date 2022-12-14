import React, { Component } from "react";
import SectionTitle from "./styles/SectionTitle.styles";

export class Personal extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <div>
        <SectionTitle>Personal Information</SectionTitle>
      </div>
    );
  }
}

export default Personal;
