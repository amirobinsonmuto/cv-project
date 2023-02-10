import React from "react";
import uniqid from "uniqid";
import WorkExperienceOutput from "../output/WorkExperienceOutput";

class WorkExperienceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      workExperience: {
        id: uniqid(),
        organization: "",
        position: "",
        description: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    };
  }

  handleChange = (event) => {
    if (event.target.id === "organization") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: event.target.value,
          position: this.state.workExperience.position,
          description: this.state.workExperience.description,
          startMonth: this.state.workExperience.startMonth,
          startYear: this.state.workExperience.startYear,
          endMonth: this.state.workExperience.endMonth,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "position") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: event.target.value,
          description: this.state.workExperience.description,
          startMonth: this.state.workExperience.startMonth,
          startYear: this.state.workExperience.startYear,
          endMonth: this.state.workExperience.endMonth,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "description") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: this.state.workExperience.position,
          description: event.target.value,
          startMonth: this.state.workExperience.startMonth,
          startYear: this.state.workExperience.startYear,
          endMonth: this.state.workExperience.endMonth,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "startMonth") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: this.state.workExperience.position,
          description: this.state.workExperience.description,
          startMonth: event.target.value,
          startYear: this.state.workExperience.startYear,
          endMonth: this.state.workExperience.endMonth,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "startYear") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: this.state.workExperience.position,
          description: this.state.workExperience.description,
          startMonth: this.state.workExperience.startMonth,
          startYear: event.target.value,
          endMonth: this.state.workExperience.endMonth,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "endMonth") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: this.state.workExperience.position,
          description: this.state.workExperience.description,
          startMonth: this.state.workExperience.startMonth,
          startYear: this.state.workExperience.startYear,
          endMonth: event.target.value,
          endYear: this.state.workExperience.endYear,
        },
      });
    } else if (event.target.id === "endYear") {
      this.setState({
        workExperience: {
          id: this.state.workExperience.id,
          organization: this.state.workExperience.organization,
          position: this.state.workExperience.position,
          description: this.state.workExperience.description,
          startMonth: this.state.workExperience.startMonth,
          startYear: this.state.workExperience.startYear,
          endMonth: this.state.workExperience.endMonth,
          endYear: event.target.value,
        },
      });
    }
  };

  render() {
    return (
      <div className="form-output">
        <form>
          <label htmlFor="organization">organization</label>
          <input type="text" id="organization" onChange={this.handleChange} />
          <label htmlFor="position">title</label>
          <input type="text" id="position" onChange={this.handleChange} />
          <label htmlFor="description">description</label>
          <input type="text" id="description" onChange={this.handleChange} />
          <label htmlFor="startMonth">startMonth</label>
          <input type="text" id="startMonth" onChange={this.handleChange} />
          <label htmlFor="startYear">startYear</label>
          <input type="text" id="startYear" onChange={this.handleChange} />
          <label htmlFor="endMonth">endMonth</label>
          <input type="text" id="endMonth" onChange={this.handleChange} />
          <label htmlFor="endYear">endYear</label>
          <input type="text" id="endYear" onChange={this.handleChange} />
        </form>
        <WorkExperienceOutput
          organization={this.state.workExperience.organization}
          position={this.state.workExperience.position}
          description={this.state.workExperience.description}
          startMonth={this.state.workExperience.startMonth}
          startYear={this.state.workExperience.startYear}
          endMonth={this.state.workExperience.endMonth}
          endYear={this.state.workExperience.endYear}
        />
      </div>
    );
  }
}

export default WorkExperienceForm;
