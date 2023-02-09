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

  addOutput = () => {};

  render() {
    return (
      <div>
        <section>
          <button onClick={this.addForm}>New education</button>
          {this.state.educationFormList}
          {/* <EducationOutput educationList={this.state.educationList} /> */}
        </section>
      </div>
    );
  }
}

export default EducationInput;
