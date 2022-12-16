import React, { Component } from "react";
import { Button, InputField } from "./Utils";

export class ExperienceItem extends Component {
  render() {
    const { id, position, company, address, from, to, deleteFn, onChangeFn } =
      this.props;

    return (
      <div>
        <InputField
          type="text"
          maxLength="30"
          placeholder="Position"
          dataField="position"
          dataList="experience"
          id={id}
          onChangeFn={onChangeFn}
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
          list
        />

        <Button text="Delete" onClickFn={deleteFn} id={id} />
      </div>
    );
  }
}

export default ExperienceItem;
