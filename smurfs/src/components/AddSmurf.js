import React, { Component } from "react";
import axios from "axios";

class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3333/smurfs", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <form onSubmit={this.submitHandler}>
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.changeHandler}
          ></input>
          <input
            name="age"
            type="text"
            placeholder="Enter Age"
            value={this.state.age}
            onChange={this.changeHandler}
          ></input>
          <input
            name="height"
            type="text"
            placeholder="Enter Height"
            value={this.state.height}
            onChange={this.changeHandler}
          ></input>
          <button type="submit"> Add </button>
        </form>
      </div>
    );
  }
}

export default AddSmurf;
