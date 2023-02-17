import { useState } from "react";

const AddEducation = ({ onAdd }) => {
  const [school, setSchool] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!program) {
      alert("Please enter school");
      return;
    }

    onAdd({ school, program, year });

    setSchool("");
    setProgram("");
    setYear("");
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
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddEducation;
