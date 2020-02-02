import React, { Component } from "react";
import { withRouter } from "react-router";
import "./ListingDetailed.css";

export default class ListingDetailed extends Component {
  constructor(props) {
    super();
    this.state = { item: [] };
  }
  componentDidMount() {
    let listingId = parseInt(this.props.match.params.id);
    let item = this.props.listings.filter(item => item.id === listingId);
    this.setState({ item: item });
  }

  addToCart = id => {
    let input = document.getElementById("amount");
    let val;
    if (input.value === "" || input.value < 1) {
      val = 1;
    } else val = input.value;
    this.props.addToCart(id, val);
    input.value = 0;
    this.props.history.push("/");
  };
  render() {
    if (this.state.item[0]) {
      let listing = this.state.item[0];
      return (
        <div className="ListingDetailed">
          <div className="container">
            <img src={listing.img} />
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
      return <p>loading...</p>;
    }
  }
}
