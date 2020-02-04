import React, { Component } from "react";
import { Switch, Route } from "react-router";

//import components
import Listings from "../Listings/Listings";
import Cart from "../Cart/Cart";
import ListingDetailed from "../ListingDetailed/ListingDetailed";
import Success from "../Success/Success";

export default class Routes extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/cart"
          render={() => (
            <Cart
              listings={this.props.listings}
              cart={this.props.cart}
              addToCart={this.props.addToCart}
            />
          )}
        />
        <Route exact path="/checkout" render={() => <div />} />
        <Route
          exact
          path="/"
          render={() => (
            <Listings
              searchString={this.props.searchString}
              listings={this.props.listings}
              handleSearch={this.props.handleSearch}
            />
          )}
        />
        <Route
          exact
          path="/listings/:id"
          render={routeProps => (
            <ListingDetailed
              addToCart={this.props.addToCart}
              listings={this.props.listings}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/success/:id"
          render={routeProps => (
            <Success listings={this.props.listings} {...routeProps} />
          )}
        />
        )}
      </Switch>
    );
  }
}
