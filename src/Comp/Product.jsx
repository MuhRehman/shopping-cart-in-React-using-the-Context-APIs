import React, { useContext } from "react";
import { CartContext } from "../Contextapi/CartContext.js";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
