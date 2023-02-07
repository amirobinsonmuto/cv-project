import React from "react";
import ExperienceOutput from "../Output/ExperienceOutput";

class ExperienceInput extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: "",
      title: "",
      description: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    };
  }

  handleChange = (event) => {
    if (event.target.id === "organization") {
      this.setState({
        organization: event.target.value,
      });
    } else if (event.target.id === "title") {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.id === "description") {
      this.setState({
        description: event.target.value,
      });
    } else if (event.target.id === "startMonth") {
      this.setState({
        startMonth: event.target.value,
      });
    } else if (event.target.id === "startYear") {
      this.setState({
        startYear: event.target.value,
      });
    } else if (event.target.id === "endMonth") {
      this.setState({
        endMonth: event.target.value,
      });
    } else {
      this.setState({
        endYear: event.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <section>
          <form>
            <label htmlFor="organization">organization</label>
            <input
              type="text"
              id="organization"
              onChange={this.handleChange}
              value={this.state.organization.text}
            />
            <label htmlFor="title">title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title.text}
            />
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              onChange={this.handleChange}
              value={this.state.description.text}
            />
            <label htmlFor="startMonth">startMonth</label>
            <input
              type="text"
              id="startMonth"
              onChange={this.handleChange}
              value={this.state.startMonth.text}
            />
            <label htmlFor="startYear">startYear</label>
            <input
              type="text"
              id="startYear"
              onChange={this.handleChange}
              value={this.state.startYear.text}
            />
            <label htmlFor="endMonth">endMonth</label>
            <input
              type="text"
              id="endMonth"
              onChange={this.handleChange}
              value={this.state.endMonth.text}
            />
            <label htmlFor="endYear">endYear</label>
            <input
              type="text"
              id="endYear"
              onChange={this.handleChange}
              value={this.state.endYear.text}
            />
          </form>
          <ExperienceOutput
            organization={this.state.organization}
            title={this.state.title}
            description={this.state.description}
            startMonth={this.state.startMonth}
            startYear={this.state.startYear}
            endMonth={this.state.endMonth}
            endYear={this.state.endYear}
          />
        </section>
      </div>
    );
  }
}

export default ExperienceInput;
