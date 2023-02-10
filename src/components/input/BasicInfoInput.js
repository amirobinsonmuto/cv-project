import React from "react";
import Resume from "../output/resume";
import EducationForm from "./EducationForm";
import WorkExperienceForm from "./WorkExperienceForm";

class BasicInfoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      workExperienceFormList: [],
      educationFormList: [],
    };
  }

  handleChange = (event) => {
    if (event.target.id === "name") {
      this.setState({
        name: event.target.value,
      });
    } else if (event.target.id === "email") {
      this.setState({
        email: event.target.value,
      });
    } else {
      this.setState({
        phone: event.target.value,
      });
    }
  };

  addWorkExperienceForm = () => {
    this.setState({
      workExperienceFormList: this.state.workExperienceFormList.concat(
        <WorkExperienceForm key={this.state.workExperienceFormList.length} />
      ),
    });
  };

  addEducationForm = () => {
    this.setState({
      educationFormList: this.state.educationFormList.concat(
        <EducationForm key={this.state.educationFormList.length} />
      ),
    });
  };

  render() {
    return (
      <main>
        <div>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
            <label htmlFor="email">email</label>
            <input type="text" id="email" onChange={this.handleChange} />
            <label htmlFor="phone">phone</label>
            <input type="text" id="phone" onChange={this.handleChange} />
          </form>

          <button onClick={this.addWorkExperienceForm}>
            New work experience
          </button>
          {this.state.workExperienceFormList}

          <button onClick={this.addEducationForm}>New education</button>
          {this.state.educationFormList}
        </div>
        <Resume
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
          workExperienceFormList={this.state.workExperienceFormList}
          educationFormList={this.state.educationFormList}
        />
      </main>
    );
  }
}

export default BasicInfoInput;
