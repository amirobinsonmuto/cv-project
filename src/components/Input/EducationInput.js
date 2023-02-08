import React from "react";
import EducationOutput from "../Output/EducationOutput";

class EducationInput extends React.Component {
  constructor() {
    super();
    this.state = {
      education: {
        school: "",
        program: "",
        graduationYear: "",
      },
    };
  }

  handleChange = (event) => {
    if (event.target.id === "school") {
      this.setState({
        education: { school: event.target.value },
      });
    } else if (event.target.id === "program") {
      this.setState({
        education: { program: event.target.value },
      });
    } else {
      this.setState({
        education: { graduationYear: event.target.value },
      });
    }
  };

  render() {
    return (
      <div>
        <section>
          <form>
            <label htmlFor="school">school</label>
            <input type="text" id="school" onChange={this.handleChange} />
            <label htmlFor="program">program</label>
            <input type="text" id="program" onChange={this.handleChange} />
            <label htmlFor="graduationYear">graduationYear</label>
            <input
              type="text"
              id="graduationYear"
              onChange={this.handleChange}
            />
          </form>
          <EducationOutput
            school={this.state.education.school}
            program={this.state.education.program}
            graduationYear={this.state.education.graduationYear}
          />
          <button>Add education</button>
        </section>
      </div>
    );
  }
}

export default EducationInput;
