import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch();

  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
    </div>
  );
};

export default CheckoutProduct;
