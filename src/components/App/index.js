import React, { Component } from 'react';
import ExercisesList from "../Exercises";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ExercisesList/>
      </div>
    );
  }
}

export default App;
