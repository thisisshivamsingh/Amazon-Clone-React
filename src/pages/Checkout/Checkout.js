import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { basket, user } = useSelector((state) => state.data);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shopping Basket is Empty"
              : "Your Shopping Basket"}
          </h2>
          {/* checkout product */}
        </div>
      </div>
      <div className="checkout-right">{/* Sub total */}</div>
    </div>
  );
};

export default Checkout;
