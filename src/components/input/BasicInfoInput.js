import React from "react";
import Resume from "../output/resume";

class BasicInfoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    if (event.target.id === "name") {
      this.setState({
        name: event.target.value,
      });
    } else if (event.target.id === "email") {
      this.setState({
        email: event.target.value,
      });
    } else {
      this.setState({
        phone: event.target.value,
      });
    }
  };

  const;

  render() {
    return (
      <div className="form-output">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="email">email</label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label htmlFor="phone">phone</label>
          <input type="text" id="phone" onChange={this.handleChange} />
        </form>

        <Resume
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        />
      </div>
    );
  }
}

export default BasicInfoInput;
