import { useState } from "react";

const AddWorkExperience = ({ onAdd, id, onDelete }) => {
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

    onAdd({ id, position, organization, description, startDate, endDate });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="50"
          rows="3"
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
      <input
        type="Button"
        value="Delete"
        className="btn btn-block"
        onClick={() => onDelete(id)}
      />
    </form>
  );
};

export default AddWorkExperience;
