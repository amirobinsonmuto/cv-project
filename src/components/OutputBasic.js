import React from "react";

class OutputBasic extends React.Component {
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

export default OutputBasic;
