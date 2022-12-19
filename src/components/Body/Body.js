import React, { useState } from "react";
import styled from "styled-components";
import example_cv from "./data/example_cv";
import initial_cv from "./data/initial_cv";
import {
  addToEducationList,
  addToExperienceList,
  deleteFromEducationList,
  deleteFromExperienceList,
  updateEducationDataState,
  updateExperienceDataState,
  updatePersonalDataState,
} from "./Form/Utils/updateState";
import Form from "./Form";
import Preview from "./Preview";

// Styles
const LayoutDiv = styled.div`
  grid-row: 2/3;

  padding: 1.25rem 5%;
  background: ${({ theme }) => theme.colors.bodyBg};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;

const Body = () => {
  // states
  // initial_cv = {
  // personalInfo:
  //   {firstName, lastName, position, image, address, phoneNumber, email, description},
  //   experienceList:[],
  //    educationList:[]
  // }
  const [cv, setCv] = useState(initial_cv);

  const handleChangePersonalInfo = (e) => {
    const { id, value } = e.target;

    if (id === "image") {
      // get the input file
      const file = e.target.files[0];
      // exit if there is no file
      if (!file) return;
      // create a file reader object
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setCv((prevState) =>
          updatePersonalDataState(prevState, id, fileReader.result)
        );
      };

      fileReader.readAsDataURL(file);
    } else {
      setCv((prevState) => updatePersonalDataState(prevState, id, value));
    }
  };

  const handleChangeListInputs = (e) => {
    // describe type of the list, whether educationList or experienceList
    const list = e.target.attributes["data-list"].value;
    // describe which list item is this in the list
    const id = e.target.attributes["data-id"].value;
    // describe the data field ex: position, company, university
    const field = e.target.attributes["data-field"].value;
    // input value
    const value = e.target.value;

    if (list === "experience") {
      setCv((prevState) =>
        updateExperienceDataState(prevState, id, field, value)
      );
    }

    if (list === "education") {
      setCv((prevState) =>
        updateEducationDataState(prevState, id, field, value)
      );
    }
  };

  const addListItem = (e) => {
    const listType = e.target.id;

    if (listType === "experience") {
      setCv((prevState) => addToExperienceList(prevState));
    }
    if (listType === "education") {
      setCv((prevState) => addToEducationList(prevState));
    }
  };

  const deleteListItem = (e) => {
    const id = e.target.id;
    const listType = e.target.attributes["data-list"].value;

    if (listType === "experience") {
      setCv((prevState) => deleteFromExperienceList(prevState, id));
    }

    if (listType === "education") {
      setCv((prevState) => deleteFromEducationList(prevState, id));
    }
  };

  const reset = () => {
    setCv(initial_cv);
  };

  const loadExample = () => {
    setCv(example_cv);
  };

  return (
    <LayoutDiv>
      <Form
        info={cv}
        onChangePersonalInfo={handleChangePersonalInfo}
        onChangeListInputs={handleChangeListInputs}
        addFn={addListItem}
        deleteFn={deleteListItem}
        resetFn={reset}
        loadExampleFn={loadExample}
      />
      <Preview info={cv} />
    </LayoutDiv>
  );
};

export default Body;
