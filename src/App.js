import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      val: "",
      buttonVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let newVal = e.target.value;
    this.setState({ val: newVal });
  }

  handleClick() {
    this.setState({ buttonVal: this.state.val, val: "" });
  }

  render() {
    return (
      <div className="App">
        <label>Your Name</label>
        <input
          placeholder="your name"
          value={this.state.val}
          onChange={this.handleChange}
          name="test"
        />
        <button type="submit" onClick={this.handleClick}>
          Click Here
        </button>
        <p>Hello {this.state.buttonVal}</p>
      </div>
    );
  }
}

export default App;
