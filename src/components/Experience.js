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

export default function Experience(props) {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    task: "",
  });

  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((expInfo) => {
      const newList = { ...expInfo, [name]: value };
      return newList;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode((mode) => !mode);
  };

  if (!editMode) {
    return (
      <div>
        <span onClick={handleSubmit}>Edit</span>
        apple
      </div>
    );
  }

  return (
    <div style={flexStyle}>
      <form style={[formStyle, flexStyle]} onSubmit={handleSubmit}>
        <label>
          <p>Company Name: </p>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
            required={true}
            value={experienceInfo.instituteName}
          />
        </label>
        <label>
          <p>Position Name: </p>
          <input
            type="text"
            name="position"
            onChange={handleChange}
            value={experienceInfo.endDate}
          />
        </label>
        <label>
          <p>Start Date: </p>
          <input
            type="Date"
            name="startDate"
            onChange={handleChange}
            required={true}
            value={experienceInfo.startDate}
          />
        </label>
        <label>
          <p>End Date: </p>
          <input
            type="Date"
            name="endDate"
            placeholder="Company Name"
            onChange={handleChange}
            required={true}
            value={experienceInfo.instituteName}
          />
        </label>
        <label style={{ gridColumn: "1/3" }}>
          <p>Job Tasks: </p>
          <input
            type="message"
            name="task"
            placeholder="Task"
            onChange={handleChange}
            required={true}
            value={experienceInfo.instituteName}
          />
        </label>
        <div>
          <button type="submit">Save</button>
          <span onClick={() => props.handleDelete("experience", props.id)}>
            Delete
          </span>
        </div>
      </form>
    </div>
  );
}
