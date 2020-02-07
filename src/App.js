// Imports
import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

// Import Components
import Nav from "./Components/Nav/Nav";
import Routes from "./Components/Routes/Routes";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      cart: {},
      about:
        "Based in the United States, Silver Shack Coins offers a large collection of high demand coins and bullion from commons to rares!"
    };
  }

  componentDidMount() {
    axios.get("https://silvershackcoins.herokuapp.com/listings").then(r => {
      let listings = r.data;
      this.setState({ listings: listings });
    });
    this.prev = window.scrollY;
    window.addEventListener("scroll", e => this.handleNavigation(e));
  }

  handleNavigation = e => {
    const window = e.currentTarget;
    const navbar = document.getElementById("Nav");
    if (this.prev > window.scrollY) {
      navbar.classList.remove("hide");
    } else if (this.prev < window.scrollY) {
      navbar.classList.add("hide");
    }
    this.prev = window.scrollY;
  };

  addToCart = (id, amount) => {
    this.setState(state => {
      let cart = state.cart;
      if (cart.hasOwnProperty(id)) {
        cart[id].quantity += parseInt(amount);
      } else {
        cart[id] = { quantity: parseInt(amount) };
      }
    });
    console.log(this.state.cart);
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes
          listings={this.state.listings}
          cart={this.state.cart}
          about={this.state.about}
          addToCart={this.addToCart}
        />
      </div>
    );
  }
}
