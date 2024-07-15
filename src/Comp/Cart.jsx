import React, { useContext } from 'react';
import { CartContext } from '../Contextapi/CartContext.js';

const Cart = () => {
    const { cart, dispatch } = useContext(CartContext);

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <div>
            <h1>Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <h2>{item.title}</h2>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
