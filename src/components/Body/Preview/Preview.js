import React, { Component } from "react";
import styled from "styled-components";

const LayoutDiv = styled.div`
  grid-column: 2/3;

  background: ${({ theme }) => theme.colors.grey};
`;

export class Preview extends Component {
  render() {
    const { info } = this.props;

    return (
      <LayoutDiv>
        <div>Preview</div>
      </LayoutDiv>
    );
  }
}

export default Preview;
