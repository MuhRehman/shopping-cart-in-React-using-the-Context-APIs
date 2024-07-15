import React from "react";
import { CartProvider } from "./Contextapi/CartContext";
import ProductList from "./Comp/ProductList";
import Cart from "./Comp/Cart";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
