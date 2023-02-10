import React from "react";
import EducationForm from "./EducationForm";

class EducationInput extends React.Component {
  constructor() {
    super();
    this.state = {
      educationFormList: [],
    };
  }

  addForm = () => {
    this.setState({
      educationFormList: this.state.educationFormList.concat(
        <EducationForm key={this.state.educationFormList.length} />
      ),
    });
    console.log(this.state.educationFormList);
  };

  render() {
    return (
      <div>
        <button onClick={this.addForm}>New education</button>
        {this.state.educationFormList}
      </div>
    );
  }
}

export default EducationInput;
