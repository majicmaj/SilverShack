import React, { Component } from "react";
import "./Success.css";
import { Link } from "react-router-dom";

export default class Success extends Component {
  constructor(props) {
    super();
    this.state = { item: [] };
  }
  static getDerivedStateFromProps(nextProps) {
    let listingId = parseInt(nextProps.match.params.id);
    return {
      item: nextProps.listings.filter(item => item.id === listingId)
    };
  }
  render() {
    if (this.state.item[0]) {
      let listing = this.state.item[0];
      return (
        <div className="Success">
          <h1>Got it!</h1>
          <Link className="link" to="/">
            <p> Continue shopping </p>
          </Link>
          <Link className="link" to="/cart">
            <p>Go to cart</p>
          </Link>
          <div className="item">
            <img src={this.state.item[0].img} />
            <p>Added {this.state.item[0].title} to your cart.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <p className="text">loading...</p>
          <Link to="/" className="link">
            <p>Back to Listings</p>
          </Link>
        </div>
      );
    }
  }
}
