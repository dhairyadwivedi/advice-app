import React, { Component } from "react";
import axios from 'axios'

import "./App.css";

export default class App extends Component {
  state = {
    advice: ""
  };

  componentDidMount(){
      console.log('component did mount')
  }

  render() {
    return <div>APP</div>;
  }
}
