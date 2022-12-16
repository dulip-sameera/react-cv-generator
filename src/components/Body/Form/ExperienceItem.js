import React, { Component } from "react";
import { Button, InputField } from "./Utils";
import styled from "styled-components";

const LayoutDiv = styled.div`
  margin-bottom: 20px;
`;

export class ExperienceItem extends Component {
  render() {
    const { id, position, company, address, from, to, deleteFn, onChangeFn } =
      this.props;

    return (
      <LayoutDiv>
        <InputField
          type="text"
          maxLength="30"
          placeholder="Position"
          dataField="position"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
          value={position}
          list
        />

        <InputField
          type="text"
          maxLength="30"
          placeholder="Company"
          dataField="company"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
          value={company}
          list
        />

        <InputField
          type="text"
          maxLength="250"
          placeholder="Address"
          dataField="address"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
          value={address}
          list
        />

        <InputField
          type="text"
          maxLength="4"
          placeholder="From"
          dataField="from"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
          value={from}
          list
        />

        <InputField
          type="text"
          maxLength="4"
          placeholder="To"
          dataField="to"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
          value={to}
          list
        />

        <Button
          text="Delete"
          onClickFn={deleteFn}
          id={id}
          listType="experience"
        />
      </LayoutDiv>
    );
  }
}

export default ExperienceItem;
