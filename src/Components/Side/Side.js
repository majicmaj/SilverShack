import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Side extends Component {
  render() {
    return (
      <aside>
        <nav>
          <Link to="/cart" className="link">
            <i className="fas fa-shopping-cart" />
          </Link>
        </nav>
      </aside>
    );
  }
}
