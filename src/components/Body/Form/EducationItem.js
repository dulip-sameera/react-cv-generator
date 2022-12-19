import React from "react";
import { Button, InputField } from "./Utils";
import styled from "styled-components";

const LayoutDiv = styled.div`
  margin-bottom: 20px;
`;

const EducationItem = ({
  id,
  universityName,
  city,
  degree,
  subject,
  from,
  to,
  deleteFn,
  onChangeFn,
}) => {
  return (
    <LayoutDiv>
      <InputField
        type="text"
        maxLength="50"
        placeholder="University Name"
        dataField="universityName"
        dataList="education"
        id={id}
        onChangeFn={onChangeFn}
        value={universityName}
        list
      />

      <InputField
        type="text"
        maxLength="30"
        placeholder="City"
        dataField="city"
        dataList="education"
        id={id}
        onChangeFn={onChangeFn}
        value={city}
        list
      />

      <InputField
        type="text"
        maxLength="250"
        placeholder="Degree"
        dataField="degree"
        dataList="education"
        id={id}
        onChangeFn={onChangeFn}
        value={degree}
        list
      />

      <InputField
        type="text"
        maxLength="250"
        placeholder="Subject"
        dataField="subject"
        dataList="education"
        id={id}
        onChangeFn={onChangeFn}
        value={subject}
        list
      />

      <InputField
        type="text"
        maxLength="4"
        placeholder="From"
        dataField="from"
        dataList="education"
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
        dataList="education"
        id={id}
        onChangeFn={onChangeFn}
        value={to}
        list
      />

      <Button text="Delete" onClickFn={deleteFn} id={id} listType="education" />
    </LayoutDiv>
  );
};

export default EducationItem;
