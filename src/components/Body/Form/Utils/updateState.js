import uniqid from "uniqid";

function updatePersonalDataState(prevState, prop, value) {
  prevState["data"]["personalInfo"][prop] = value;

  return prevState;
}

function updateExperienceDataState(prevState, id, prop, value) {
  prevState["data"]["experienceList"] = prevState["data"]["experienceList"].map(
    (item) => {
      if (item.id === id) {
        item[prop] = value;
        return item;
      }

      return item;
    }
  );

  return prevState;
}

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
  updateExperienceDataState,
};
