import React from "react";
import EducationOutput from "../Output/EducationOutput";

class EducationInput extends React.Component {
  constructor() {
    super();
    this.state = {
      school: "",
      program: "",
      graduationYear: "",
    };
  }

  handleChange = (event) => {
    if (event.target.id === "school") {
      this.setState({
        school: event.target.value,
      });
    } else if (event.target.id === "program") {
      this.setState({
        program: event.target.value,
      });
    } else {
      this.setState({
        graduationYear: event.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <section>
          <form>
            <label htmlFor="school">school</label>
            <input
              type="text"
              id="school"
              onChange={this.handleChange}
              value={this.state.school.text}
            />
            <label htmlFor="program">program</label>
            <input
              type="text"
              id="program"
              onChange={this.handleChange}
              value={this.state.program.text}
            />
            <label htmlFor="graduationYear">graduationYear</label>
            <input
              type="text"
              id="graduationYear"
              onChange={this.handleChange}
              value={this.state.graduationYear.text}
            />
          </form>
          <EducationOutput
            school={this.state.school}
            program={this.state.program}
            graduationYear={this.state.graduationYear}
          />
        </section>
      </div>
    );
  }
}

export default EducationInput;
