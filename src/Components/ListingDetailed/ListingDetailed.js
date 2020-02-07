import React, { Component } from "react";
import "./ListingDetailed.css";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

export default class ListingDetailed extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  static getDerivedStateFromProps(nextProps) {
    let listingId = parseInt(nextProps.match.params.id);
    return {
      item: nextProps.listings.filter(item => item.id === listingId)
    };
  }
  addToCart = id => {
    let input = document.getElementById("amount");
    let val;
    if (input.value === "" || input.value < 1) {
      val = 1;
    } else val = input.value;
    this.props.addToCart(id, val);
    input.value = 0;
    this.props.history.push("/success/" + id);
  };
  render() {
    if (this.state.item[0]) {
      let listing = this.state.item[0];
      return (
        <div className="ListingDetailed">
          <div className="container">
            <Tilt className="Tilt tilt" options={{ max: 50, perspective: 500 }}>
              <img src={listing.img} />
            </Tilt>
            <p className="title">{listing.title}</p>
            <p className="year">{listing.blurb}</p>
            <p> Choose how many </p>
            <div className="cartStuff">
              <input
                type="number"
                id="amount"
                className="amount"
                placeholder="1"
                autoFocus
              />
              <div
                className="addToCart"
                onClick={() => this.addToCart(listing.id)}
              >
                <i className="fas fa-cart-plus" />
              </div>
            </div>
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
