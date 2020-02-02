import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>Silver Shack Coins</h1>
        <p>{this.props.about}</p>
      </div>
    );
  }
}
