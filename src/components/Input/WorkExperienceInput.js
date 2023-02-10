import React from "react";
import WorkExperienceForm from "./WorkExperienceForm";

class WorkExperienceInput extends React.Component {
  constructor() {
    super();
    this.state = {
      workExperienceFormList: [],
    };
  }

  addForm = () => {
    this.setState({
      workExperienceFormList: this.state.workExperienceFormList.concat(
        <WorkExperienceForm key={this.state.workExperienceFormList.length} />
      ),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addForm}>New work experience</button>
        {this.state.workExperienceFormList}
      </div>
    );
  }
}

export default WorkExperienceInput;
