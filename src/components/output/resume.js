import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <section className="resume">
        <div className="basic-info-output-area">
          <h2 className="name-output">{this.props.name}</h2>
          <h3 className="email-output">{this.props.email}</h3>
          <h3 className="phone-output">{this.props.phone}</h3>
        </div>
        <div className="work-experience-output-area">
          <h2>Work Experience</h2>
          <div>insert</div>
        </div>
        <div className="education-output-area">
          <h2>Education</h2>
          <div>insert</div>
        </div>
      </section>
    );
  }
}

export default Resume;
