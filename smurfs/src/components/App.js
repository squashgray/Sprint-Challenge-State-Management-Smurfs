import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <p>SHOW ME MY SMURFS!</p>
        <button onClick={this.props.getSmurfs}>TIME TO SMURF!</button>
        <AddSmurf />

        <div>
          <SmurfList data={this.props.data} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
