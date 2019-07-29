import React, { Component } from "react";
import ComponentCard from "./Components/ComponentCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }
  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name;
    function handleClick() {
      console.log("I was clicked!!");
    }
    function handleHover() {
      console.log("Hovered!!cd");
    }
    return <div>{text}</div>;
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
