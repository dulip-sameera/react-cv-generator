import uniqid from "uniqid";

function updatePersonalDataState(prevState, prop, value) {
  prevState["data"]["personalInfo"][prop] = value;

  return prevState;
}

function updateExperienceDataState(prevState) {}

function addToExperienceList(prevState) {
  prevState["data"]["experienceList"] = [
    ...prevState["data"]["experienceList"],
    {
      id: uniqid(),
      position: "",
      company: "",
      address: "",
      from: "",
      to: "",
    },
  ];

  return prevState;
}

function deleteFromExperienceList(prevState, id) {
  const index = prevState["data"]["experienceList"].findIndex(
    (item) => item.id === id
  );

  prevState["data"]["experienceList"].splice(index, 1);

  return prevState;
}

export {
  updatePersonalDataState,
  addToExperienceList,
  deleteFromExperienceList,
};
