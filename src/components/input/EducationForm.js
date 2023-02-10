import React from "react";
import uniqid from "uniqid";
import EducationOutput from "../output/EducationOutput";

class EducationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      education: {
        id: uniqid(),
        school: "",
        program: "",
        graduationYear: "",
      },
    };
  }

  handleChange = (event) => {
    if (event.target.id === "school") {
      this.setState({
        education: {
          id: this.state.education.id,
          school: event.target.value,
          program: this.state.education.program,
          graduationYear: this.state.education.graduationYear,
        },
      });
    } else if (event.target.id === "program") {
      this.setState({
        education: {
          id: this.state.education.id,
          school: this.state.education.school,
          program: event.target.value,
          graduationYear: this.state.education.graduationYear,
        },
      });
    } else {
      this.setState({
        education: {
          id: this.state.education.id,
          school: this.state.education.school,
          program: this.state.education.program,
          graduationYear: event.target.value,
        },
      });
    }
  };

  render() {
    return (
      <div className="form-output">
        <form>
          <label htmlFor="school">school</label>
          <input type="text" id="school" onChange={this.handleChange} />
          <label htmlFor="program">program</label>
          <input type="text" id="program" onChange={this.handleChange} />
          <label htmlFor="graduationYear">graduationYear</label>
          <input type="text" id="graduationYear" onChange={this.handleChange} />
        </form>
        <EducationOutput
          school={this.state.education.school}
          program={this.state.education.program}
          graduationYear={this.state.education.graduationYear}
        />
      </div>
    );
  }
}

export default EducationForm;
