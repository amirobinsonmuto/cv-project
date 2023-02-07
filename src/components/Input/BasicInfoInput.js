import React from "react";
import BasicInfoOutput from "../Output/BasicInfoOutput";

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

  render() {
    return (
      <div>
        <section>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={this.state.name.text}
            />
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              value={this.state.name.text}
            />
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              id="phone"
              onChange={this.handleChange}
              value={this.state.phone.text}
            />
          </form>

          <BasicInfoOutput
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
          />
        </section>
      </div>
    );
  }
}

export default BasicInfoInput;
