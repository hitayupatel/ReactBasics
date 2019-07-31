import React, { Component } from "react";
import ComponentCard from "./Components/ComponentCard";

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
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={this.state.age}
          placeholder="Age"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          Destination:
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">---Please select country---</option>
            <option value="united states">United States</option>
            <option value="india">India</option>
            <option value="russia">Russia</option>
            <option value="australia">Australia</option>
            <option value="united kingdom">United Kingdom</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={this.state.isLactoseFree}
            onChange={this.handleChange}
          />
          Lacose Free
        </label>
        <label>
          <input
            type="checkbox"
            name="isVegeterain"
            checked={this.state.isVegeterain}
            onChange={this.handleChange}
          />
          Vegeterian
        </label>
        <br />
        <br />
        <label>Fovourite color</label>
        <br />
        <button>Submit</button>
        <hr />
        <br />
        <h1>Entered Information:</h1>
        <p>
          Name:
          {this.state.firstName}
          {this.state.lastName}
        </p>
        <p>You age is {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Destination: {this.state.destination}</p>
        <p>
          Your Dietary restriction: <br />
          Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
          Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} <br />
          Vegeterian: {this.state.isVegeterain ? "Yes" : "No"} <br />
        </p>
      </form>
    );
  }
}

export default App;
