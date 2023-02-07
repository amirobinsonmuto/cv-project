import React from "react";
import OutputBasic from "./OutputBasic";

class InputBasic extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            value={this.state.name.text}
          />
          <button type="submit">Display</button>
        </form>
        <OutputBasic name={this.state.name} />
      </div>
    );
  }
}

export default InputBasic;
