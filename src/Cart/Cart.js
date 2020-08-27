import React from 'react';
import './Cart.css';

// add bootstrap
import '../BootStrap/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart = props.cart;

    // count total price of product
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;
    }
    return (
        // desitn cart section
        <div className="carts">
            <h2>-===:: Order Summary ::===-</h2>
            <h3 className="order">Items Ordered: {cart.length}</h3>
            <h3 className="total">Total Price: $ {total.toFixed(2)}</h3>

            {/* bootstrap button */}
            <Button className="checkout" variant="info">Check Out</Button>
        </div>
    );
};

export default Cart;