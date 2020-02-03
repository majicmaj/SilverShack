import React, { Component } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  getTotal = () => {
    let total = 0.0;
    Object.entries(this.props.cart).forEach(cartItem => {
      const listing = this.props.listings.find(
        item => parseInt(item.id) === parseInt(cartItem[0])
      );
      total += (listing.price * cartItem[1].quantity) / 100;
    });
    return total;
  };

  removeFromCart = (id, quan) => {
    this.props.addToCart(id, -1 * quan);
  };

  render() {
    if (Object.keys(this.props.cart).length) {
      console.log(this.props.cart);
      return (
        <div className="Cart">
          {Object.entries(this.props.cart).map(cartItem => {
            console.log(this.props.listing);
            const listing = this.props.listings.find(
              item => parseInt(item.id) === parseInt(cartItem[0])
            ) || { title: "words" };
            return (
              <div key={listing.id} className="item">
                <img src={listing.img} />
                <div className="details">
                  <Link className="link" to={"/listings/" + listing.id}>
                    <p className="title">{listing.title}</p>
                  </Link>
                  <p className="price">
                    ${Number(listing.price / 100).toFixed(2)}
                  </p>
                  <div className="amount">
                    <p className="quantity">x{cartItem[1].quantity}</p>
                  </div>
                  <p className="total">
                    $
                    {Number(
                      (listing.price / 100) * cartItem[1].quantity
                    ).toFixed(2)}
                  </p>
                </div>
                <div
                  className="removeItem"
                  onClick={() =>
                    this.removeFromCart(listing.id, cartItem[1].quantity)
                  }
                >
                  <i className="fas fa-times" />
                </div>
              </div>
            );
          })}
          <div className="totalBox">
            <p className="total">
              Subtotal: ${Number(this.getTotal()).toFixed(2)}
            </p>
            <p className="total">
              Tax: ${Number(this.getTotal() * 0.05).toFixed(2)}
            </p>
            <p className="total">
              Grand Total: $
              {Number(this.getTotal() * 0.05 + this.getTotal()).toFixed(2)}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Cart">
          <div className="item">
            <div className="details">
              <p>You don't have any items in your cart. Let's change that!</p>
              <Link to="/" className="link startShopping">
                <p>Start Shopping</p>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
{
  /* {Object.entries(this.props.cart).map(item => (
          <div key={item[0]} className="item">
            <img src={this.props.listings[item[0]].img} />
            <div className="details">
              <p className="title">{this.props.listings[item[0]].title}</p>
              <p className="price">
                ${Number(this.props.listings[item[0]].price / 100).toFixed(2)}
              </p>
              <div className="amount">
                <p className="quantity">x{item[1].quantity}</p>
              </div>
              <p className="total">
                $
                {Number(
                  (this.props.listings[item[0]].price / 100) * item[1].quantity
                ).toFixed(2)}
              </p>
            </div>
          </div>
        ))} */
}
