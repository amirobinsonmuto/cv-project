import { useState } from "react";
import PropTypes from "prop-types";

import MonthYearPicker from "./elements/MonthYearPicker";

const AddEducation = ({ id, onAdd, onDelete, onUpdate }) => {
  const [school, setSchool] = useState("");
  const [program, setProgram] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isClicked === false) {
      if (!school) {
        alert("Please add a school");
        return;
      }
      onAdd({ id, school, program, startDate, endDate });
      setIsClicked(true);
    } else {
      onUpdate({ id, school, program, startDate, endDate });
    }
  };

  const doIfCurrent = (e) => {
    if (e.target.checked === true) {
      setEndDate("Present");
      setIsPresent(true);
    } else {
      setIsPresent(false);
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Program*"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="School*"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          required
        />
        <MonthYearPicker
          currentText="enrolled to this program"
          doIfCurrent={doIfCurrent}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          isPresent={isPresent}
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

AddEducation.propTypes = {
  id: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AddEducation;
