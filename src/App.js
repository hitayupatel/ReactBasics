import React, { Component } from "react";
import ComponentCard from "./Components/ComponentCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favcolor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }
  render() {
    //const text = this.state.loading ? "loading..." : this.state.character.name;
    // function handleClick() {
    //   console.log("I was clicked!!");
    // }
    // function handleHover() {
    //   console.log("Hovered!!cd");
    // }
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

        <textarea value={"Some Default value"} onChange={this.handleChange} />

        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Done?
        </label>
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
        <label>Fovourite color</label>
        <select
          name="favcolor"
          value={this.state.favcolor}
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>
          {this.state.firstName}
          {this.state.lastName}
        </h1>
        <h1>You are {this.state.gender}</h1>
        <h2>Your Favourite color is {this.state.favcolor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours <= 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1> Good {timeOfDay} to you. </h1>;
//   }
// }

export default App;
