import PropTypes from "prop-types";
import { useState } from "react";

import MonthYearPicker from "./elements/MonthYearPicker";

const AddWorkExperience = ({ id, onAdd, onDelete, onUpdate }) => {
  const [position, setPosition] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!isClicked) {
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
          placeholder="Position*"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Organization*"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          cols="50"
          rows="3"
        />
        <MonthYearPicker
          currentText="working in this role"
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          isPresent={isPresent}
          setIsPresent={setIsPresent}
        />
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

AddWorkExperience.propTypes = {
  id: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AddWorkExperience;
