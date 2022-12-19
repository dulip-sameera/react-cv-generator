import uniqid from "uniqid";

const example_cv = {
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
};

export default example_cv;
