import React from "react";

class Output extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
        <p>{this.props.phone}</p>
      </div>
    );
  }
}

export default Output;
