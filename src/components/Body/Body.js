import React, { useState } from "react";
import styled from "styled-components";
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

  return (
    <LayoutDiv>
      <div>Body</div>
    </LayoutDiv>
  );
};

export default Body;

// import { Form } from "./Form";
// import Preview from "./Preview";
// import {
//   addToEducationList,
//   addToExperienceList,
//   deleteFromEducationList,
//   deleteFromExperienceList,
//   updateEducationDataState,
//   updateExperienceDataState,
//   updatePersonalDataState,
// } from "./Form/Utils/updateState";
// import uniqid from "uniqid";

//   addListItem = (e) => {
//     const type = e.target.id;

//     if (type === "experience") {
//       this.setState((state) => addToExperienceList(state));
//     }

//     if (type === "education") {
//       this.setState((state) => addToEducationList(state));
//     }
//   };

//   reset = () => {
//     this.setState({
//       data: {
//         personalInfo: {
//           firstName: "",
//           lastName: "",
//           position: "",
//           image: "",
//           address: "",
//           phoneNumber: "",
//           email: "",
//           description: "",
//         },
//         experienceList: [],
//         educationList: [],
//       },

//       experience: {
//         id: "",
//         position: "",
//         company: "",
//         address: "",
//         from: "",
//         to: "",
//       },

//       education: {
//         id: "",
//         universityName: "",
//         city: "",
//         degree: "",
//         subject: "",
//         from: "",
//         to: "",
//       },
//     });
//   };

//   loadExample = () => {
//     this.setState({
//       data: {
//         personalInfo: {
//           firstName: "John",
//           lastName: "Doe",
//           position: "Senior Web Developer",
//           image: "",
//           address: "10, Example Street, Example City.",
//           phoneNumber: "0712345853",
//           email: "john.doe@gamil.com",
//           description:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum ",
//         },
//         experienceList: [
//           {
//             id: uniqid(),
//             position: "Senior Web Developer",
//             company: "Facebook Inc",
//             address: "California",
//             from: "2018",
//             to: "2020",
//           },
//         ],
//         educationList: [
//           {
//             id: uniqid(),
//             universityName: "Example University",
//             city: "Example City",
//             degree: "Example Degree",
//             subject: "Example Subject",
//             from: "2015",
//             to: "2018",
//           },
//         ],
//       },

//       experience: {
//         id: "",
//         position: "",
//         company: "",
//         address: "",
//         from: "",
//         to: "",
//       },

//       education: {
//         id: "",
//         universityName: "",
//         city: "",
//         degree: "",
//         subject: "",
//         from: "",
//         to: "",
//       },
//     });
//   };

//   render() {
//     return (
//       <LayoutDiv>
//         <Form
//           info={this.state}
//           onChangeFn={{
//             personal: this.onPersonalInputChange,
//             list: this.onListInputChange,
//           }}
//           deleteFn={this.deleteListItem}
//           addFn={this.addListItem}
//           resetFn={this.reset}
//           loadExampleFn={this.loadExample}
//         />
//         <Preview info={this.state.data} ref={this.previewRef} />
//       </LayoutDiv>
//     );
//   }
// }

// export default Body;
