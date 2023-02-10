import React from "react";

class EducationOutput extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.school}</p>
        <p>{this.props.program}</p>
        <p>{this.props.graduationYear}</p>
      </div>
    );
  }
}

export default EducationOutput;
