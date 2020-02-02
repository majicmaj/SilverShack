import React, { Component } from "react";
import "./Listing.css";

const wl =
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/Walking_Liberty_Half_Dollar_1945D_Obverse.png";

export default class Listing extends Component {
  render() {
    return (
      <div className="Listing">
        <div className="container">
          <img src={this.props.listing.img} />
          <p className="title">{this.props.listing.title}</p>
          <p className="year">{this.props.listing.blurb}</p>
          <p className="price">
            ${Number(this.props.listing.price / 100).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}
