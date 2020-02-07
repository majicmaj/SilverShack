import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="Nav" id="Nav">
        {/* Left Hamburger Menu */}
        <div className="hamburger">
          <i className="fas fa-bars" />
        </div>
        {/* Middle SS Logo */}
        <div className="logo">
          <Link className="link" to="/">
            <i className="fas fa-coins" />
          </Link>
        </div>
        {/* Search */}
        <div className="right">
          {/* <div className="search">
            <Link className="link" to="/search">
              <i className="fas fa-search" />
            </Link>
          </div> */}
          {/* Cart */}
          <div className="cart">
            <Link className="link" to="/cart">
              <i className="fas fa-shopping-cart" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
