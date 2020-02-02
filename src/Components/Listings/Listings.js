import React, { Component } from "react";
import "./Listings.css";

//import components
import About from "../About/About";
import Listing from "../Listing/Listing";
import { Link } from "react-router-dom";

export default class Listings extends Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.listings) {
      return (
        <div className="Listings">
          <About about={this.props.about} />
          <div className="listingsGrid">
            {this.props.listings.map(item => (
              <Link className="link" key={item.id} to={"/listings/" + item.id}>
                <Listing listing={item} />
              </Link>
            ))}
          </div>
        </div>
      );
    } else return <div />;
  }
}
