import React from "react";

class OutputBasic extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default OutputBasic;
