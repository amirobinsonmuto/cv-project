import { useState } from "react";

const AddWorkExperience = ({ onAdd }) => {
  const [position, setPosition] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!position) {
      alert("Please add a position");
      return;
    }

    onAdd({ position, organization, description, startDate, endDate });

    setPosition("");
    setOrganization("");
    setDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Position</label>
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <label htmlFor="">Organization</label>
        <input
          type="text"
          placeholder="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <label htmlFor="">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="">Start date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="">End date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddWorkExperience;
