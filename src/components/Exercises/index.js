import React, { Component } from "react";
import { API_ENDPOINT } from "../../utils/network";
import ExerciseComponent from "./exerciseComponent";
import ErrorMessage from "../ErrorMessage";
import "./index.css";

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercisesList: [],
      error: false
    };
    this.requestBody = {
      api: "exercises/get-exercises",
      clientKey: "8e28b8db-6395-4417-9df9-10dd0efb5ef9",
      paging: {
        limit: 79,
        offset: 0
      }
    };
  }

  getExercises = () => {
    fetch(API_ENDPOINT, {
      method: 'post',
      cache: "no-cache",
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(this.requestBody)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res.data);
        this.setState({exercisesList: res.data.filter(item => item.BodyZoneJson.includes(1))});
      })
      .catch(e => this.setState({error: e.message}))
  };

  componentDidMount() {
    this.getExercises();
  }

  render() {
    return (
      <div className="exercises-list">
        <ul>
          {
            this.state.exercisesList.map(item => {
              return (
                <ExerciseComponent
                  key={item.id}
                  item={item}
                />
              )
            })
          }
        </ul>
        {
          this.state.error &&
            <ErrorMessage
              text={this.state.error}
            />
        }
      </div>
    );
  }
}

export default ExercisesList;