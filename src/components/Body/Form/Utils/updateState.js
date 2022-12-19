import initial_education from "../../data/initial_education";
import initial_experience from "../../data/initial_experience";

function updatePersonalDataState(prevState, prop, value) {
  prevState["personalInfo"][prop] = value;

  return prevState;
}

function updateExperienceDataState(prevState, id, prop, value) {
  prevState["experienceList"] = prevState["experienceList"].map((item) => {
    if (item.id === id) {
      item[prop] = value;
      return item;
    }

    return item;
  });

  return prevState;
}

function updateEducationDataState(prevState, id, prop, value) {
  prevState["educationList"] = prevState["educationList"].map((item) => {
    if (item.id === id) {
      item[prop] = value;
      return item;
    }

    return item;
  });

  return prevState;
}

function addToExperienceList(prevState) {
  prevState["experienceList"] = [
    ...prevState["experienceList"],
    initial_experience,
  ];

  return prevState;
}

function addToEducationList(prevState) {
  prevState["educationList"] = [
    ...prevState["educationList"],
    initial_education,
  ];

  return prevState;
}

function deleteFromExperienceList(prevState, id) {
  const index = prevState["experienceList"].findIndex((item) => item.id === id);

  prevState["experienceList"].splice(index, 1);

  return prevState;
}

function deleteFromEducationList(prevState, id) {
  const index = prevState["educationList"].findIndex((item) => item.id === id);

  prevState["educationList"].splice(index, 1);

  return prevState;
}

export {
  updatePersonalDataState,
  addToExperienceList,
  deleteFromExperienceList,
  updateExperienceDataState,
  addToEducationList,
  deleteFromEducationList,
  updateEducationDataState,
};
