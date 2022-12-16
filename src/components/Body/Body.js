import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "./Form";
import Preview from "./Preview";
import {
  addToEducationList,
  addToExperienceList,
  deleteFromEducationList,
  deleteFromExperienceList,
  updateEducationDataState,
  updateExperienceDataState,
  updatePersonalDataState,
} from "./Form/Utils/updateState";
import uniqid from "uniqid";

const LayoutDiv = styled.div`
  grid-row: 2/3;

  padding: 1.25rem 5%;
  background: ${({ theme }) => theme.colors.bodyBg};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        personalInfo: {
          firstName: "",
          lastName: "",
          position: "",
          image: "",
          address: "",
          phoneNumber: "",
          email: "",
          description: "",
        },
        experienceList: [],
        educationList: [],
      },

      experience: {
        id: "",
        position: "",
        company: "",
        address: "",
        from: "",
        to: "",
      },

      education: {
        id: "",
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    };

    this.previewRef = React.createRef();
  }

  onPersonalInputChange = (e) => {
    const id = e.target.id;
    let value = e.target.value;

    if (id === "image") {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = function () {
        this.setState((state) =>
          updatePersonalDataState(state, id, fileReader.result)
        );
      }.bind(this);
    } else {
      this.setState((state) => updatePersonalDataState(state, id, value));
    }
  };

  onListInputChange = (e) => {
    const list = e.target.attributes["data-list"].value;
    const id = e.target.attributes["data-id"].value;
    const field = e.target.attributes["data-field"].value;
    const value = e.target.value;

    if (list === "experience") {
      this.setState((state) =>
        updateExperienceDataState(state, id, field, value)
      );
    }

    if (list === "education") {
      this.setState((state) =>
        updateEducationDataState(state, id, field, value)
      );
    }
  };

  deleteListItem = (e) => {
    const id = e.target.id;
    const listType = e.target.attributes["data-list"].value;

    if (listType === "experience") {
      this.setState((state) => deleteFromExperienceList(state, id));
    }

    if (listType === "education") {
      this.setState((state) => deleteFromEducationList(state, id));
    }
  };

  addListItem = (e) => {
    const type = e.target.id;

    if (type === "experience") {
      this.setState((state) => addToExperienceList(state));
    }

    if (type === "education") {
      this.setState((state) => addToEducationList(state));
    }
  };

  reset = () => {
    this.setState({
      data: {
        personalInfo: {
          firstName: "",
          lastName: "",
          position: "",
          image: "",
          address: "",
          phoneNumber: "",
          email: "",
          description: "",
        },
        experienceList: [],
        educationList: [],
      },

      experience: {
        id: "",
        position: "",
        company: "",
        address: "",
        from: "",
        to: "",
      },

      education: {
        id: "",
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    });
  };

  loadExample = () => {
    this.setState({
      data: {
        personalInfo: {
          firstName: "John",
          lastName: "Doe",
          position: "Senior Web Developer",
          image: "",
          address: "10, Example Street, Example City.",
          phoneNumber: "0712345853",
          email: "john.doe@gamil.com",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum ",
        },
        experienceList: [
          {
            id: uniqid(),
            position: "Senior Web Developer",
            company: "Facebook Inc",
            address: "California",
            from: "2018",
            to: "2020",
          },
        ],
        educationList: [
          {
            id: uniqid(),
            universityName: "Example University",
            city: "Example City",
            degree: "Example Degree",
            subject: "Example Subject",
            from: "2015",
            to: "2018",
          },
        ],
      },

      experience: {
        id: "",
        position: "",
        company: "",
        address: "",
        from: "",
        to: "",
      },

      education: {
        id: "",
        universityName: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    });
  };

  render() {
    return (
      <LayoutDiv>
        <Form
          info={this.state}
          onChangeFn={{
            personal: this.onPersonalInputChange,
            list: this.onListInputChange,
          }}
          deleteFn={this.deleteListItem}
          addFn={this.addListItem}
          resetFn={this.reset}
          loadExampleFn={this.loadExample}
        />
        <Preview info={this.state.data} ref={this.previewRef} />
      </LayoutDiv>
    );
  }
}

export default Body;
