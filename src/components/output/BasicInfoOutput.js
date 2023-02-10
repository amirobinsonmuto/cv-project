import React from "react";

class BasicInfoOutput extends React.Component {
  render() {
    return (
      <div>
        <h2 className="name-output">{this.props.name}</h2>
        <h3 className="email-output">{this.props.email}</h3>
        <h3 className="phone-output">{this.props.phone}</h3>
      </div>
    );
  }
}

export default BasicInfoOutput;
