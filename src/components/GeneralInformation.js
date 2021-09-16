import React, { useState } from "react";

const formStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "1rem",
  gridRowGap: "1rem",
  gridColumnGap: "2rem",
};

const flexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function GeneralInformation() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((prevMode) => !prevMode);
    console.log(editMode);
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setPersonalInfo((info) => {
      const newInfo = { ...info, [name]: value };
      return newInfo;
    });
  }

  // if (!editMode) {
  //   return <View handleEdit={handleSubmit} info={personalInfo} />;
  // }

  if (!editMode) {
    return (
      <div>
        <span onClick={handleSubmit}>Edit</span>
        <p>
          <span>First Name: </span>
          {personalInfo.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {personalInfo.lastName}
        </p>
        <p>
          <span>Email: </span>
          {personalInfo.email}
        </p>
        <p>
          <span>Date Of Birth: </span>
          {personalInfo.dateOfBirth}
        </p>
      </div>
    );
  }

  return (
    <div style={flexStyle}>
      <h3>General Information</h3>

      <form onSubmit={handleSubmit} style={flexStyle}>
        <div style={formStyle}>
          <label>
            <p>First Name: </p>
            <input
              value={personalInfo.firstName}
              name="firstName"
              type="text"
              required={true}
              placeholder="First Name"
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Last Name: </p>
            <input
              value={personalInfo.lastName}
              name="lastName"
              type="text"
              required={true}
              placeholder="last Name"
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Email Address: </p>
            <input
              value={personalInfo.email}
              name="email"
              type="text"
              required={true}
              placeholder="email"
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Date Of Birth: </p>
            <input
              value={personalInfo.dateOfBirth}
              type="date"
              required={true}
              onChange={handleChange}
              name="dateOfBirth"
            />
          </label>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
