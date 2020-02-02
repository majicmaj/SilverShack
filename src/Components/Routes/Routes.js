import React, { Component } from "react";
import { Switch, Route } from "react-router";

//import components
import Listings from "../Listings/Listings";
import Cart from "../Cart/Cart";
import ListingDetailed from "../ListingDetailed/ListingDetailed";

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
            <Cart listings={this.props.listings} cart={this.props.cart} />
          )}
        />

        <Route exact path="/checkout" render={() => <div />} />

        <Route
          exact
          path="/"
          render={() => (
            <Listings about={this.props.about} listings={this.props.listings} />
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
      </Switch>
    );
  }
}
