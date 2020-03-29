import React, { Component } from "react";
import { FaTwitter } from "react-icons/fa";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = {
    advice: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(response => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch(error => {
        console.logg(error);
      });
  };

  render() {
    let shareTweet =
      "https://twitter.com/intent/tweet?text=" + this.state.advice;
    return (
      <div className="app">
        <h1 id="heading">FREE ADVICE</h1>
        <h2 id="subheading">
          This app gives free advice, just like your relatives but actually
          useful and less condescending.
        </h2>
        <div className="card">
          <h1 className="advice">{this.state.advice}</h1>
          <div className="buttonContainer">
            <button className="button" onClick={this.fetchData}>Get Advice</button>
            <button id="tweet" className="ui inverted basic button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                class="twitter-share-button"
                href={shareTweet}
              >
                <FaTwitter color="white" className="share" />
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
