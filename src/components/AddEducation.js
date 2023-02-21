import { useState } from "react";

const AddEducation = ({ id, onAdd, onDelete, onUpdate }) => {
  const [school, setSchool] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isClicked === false) {
      if (!school) {
        alert("Please add a school");
        return;
      }
      onAdd({ id, school, program, year });
      setIsClicked(true);
    } else {
      onUpdate({ id, school, program, year });
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        />
        <input
          type="text"
          placeholder="School"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <input
          type="number"
          placeholder="Graduation Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
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

export default AddEducation;
