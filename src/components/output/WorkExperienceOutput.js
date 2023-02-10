import React from "react";

class WorkExperienceOutput extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.organization}</p>
        <p>{this.props.position}</p>
        <p>{this.props.description}</p>
        <p>{this.props.startMonth}</p>
        <p>{this.props.startYear}</p>
        <p>{this.props.endMonth}</p>
        <p>{this.props.endYear}</p>
      </div>
    );
  }
}

export default WorkExperienceOutput;
