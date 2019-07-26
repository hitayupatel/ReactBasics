import React, { Component } from "react";
import ComponentCard from "./Components/ComponentCard";

class App extends React.Component {
  render() {
    function handleClick() {
      console.log("I was clicked!!");
    }
    function handleHover() {
      console.log("Hovered!!");
    }
    return (
      <div>
        <img
          onMouseOver={handleHover}
          src="https://www.fillmurray.com/200/300"
        />
        <br />
        <br />
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours <= 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1> Good {timeOfDay} to you. </h1>;
  }
}

export default App;
