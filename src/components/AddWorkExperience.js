import { useState } from "react";

const AddWorkExperience = ({ id, onAdd, onDelete, onUpdate }) => {
  const [position, setPosition] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isClicked) {
      if (!position) {
        alert("Please add a position");
        return;
      }
      onAdd({ id, position, organization, description, startDate, endDate });
      setIsClicked(true);
    } else {
      onUpdate({ id, position, organization, description, startDate, endDate });
    }
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
        <div className="form-control-check">
          <input
            type="checkbox"
            // value={isCurrentRole}
            onChange={(e) => {
              const endDateInput = document.getElementById("end-date-input");
              const endDateLabel = document.getElementById("end-date-label");
              if (e.target.checked === true) {
                endDateInput.classList.add("hidden");
                endDateLabel.classList.add("hidden");
                setEndDate("Present");
              } else {
                endDateInput.classList.remove("hidden");
                endDateLabel.classList.remove("hidden");
              }
            }}
          />
          <label htmlFor="current-role">
            I am currently working in this role
          </label>
        </div>
        <div className="flex">
          <label htmlFor="">From</label>
          <input
            type="month"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label htmlFor="" id="end-date-label">
            To
          </label>
          <input
            type="month"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            id="end-date-input"
          />
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-block" readOnly />
      <input
        type="Button"
        value="Delete"
        className="btn btn-block"
        onClick={() => onDelete(id)}
        readOnly
      />
    </form>
  );
};

export default AddWorkExperience;
