import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <section className="resume">
        <div className="basic-info-output-area">
          <h2>Name</h2>
          <h3>Email</h3>
          <h3>Phone</h3>
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
