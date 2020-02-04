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

  handleSearch = () => {
    this.props.handleSearch(this.refs.search.value);
  };
  render() {
    if (this.props.listings) {
      let _listings = this.props.listings;
      let search = this.props.searchString.trim().toLowerCase();

      if (search.length > 0) {
        _listings = _listings.filter(listing => {
          return listing.title.toLowerCase().match(search);
        });
      }
      return (
        <div className="Listings">
          <About about="Based in United States, Silver Shack Coins offers a large collection of both high demand coins and bullion!" />
          <div className="search">
            <input
              className="searchInput"
              type="text"
              value={search}
              onChange={this.handleSearch}
              ref="search"
            />
            <i className="fas fa-search" />
          </div>
          <div className="listingsGrid">
            {_listings.map(item => (
              <Link className="link" key={item.id} to={"/listings/" + item.id}>
                <Listing listing={item} />
              </Link>
            ))}
          </div>
        </div>
      );
    } else
      return (
        <div className="Listings">
          <div className="loading">
            <About about="Based in United States, Silver Shack Coins offers a large collection of both high demand coins and bullion!" />

            <p className="text">loading...</p>
          </div>
        </div>
      );
  }
}
