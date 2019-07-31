import React, { Component } from "react";
import ComponentCard from "./Components/ComponentCard";
import FormComponent from "./Components/FormComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isLactoseFree: false,
      isVegeterain: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({ [name]: value });
  }
  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default App;
