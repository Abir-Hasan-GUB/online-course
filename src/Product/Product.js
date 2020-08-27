import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, rating, price } = props.product; //recive all product as single 
    const icon = <FontAwesomeIcon icon={faShoppingCart} />; //{fontAwesome icon added}
    return (
        <div className="productDescription">

            {/* design product componants */}
            <div className="productImg">
                <img src={img} alt="img" />
            </div>
            <h1>{name}</h1>
            <h2>Price: $ {price}</h2>
            <p>Ratting: {rating} ⭐⭐⭐⭐</p>
            <button className="button" onClick={() =>
                props.handleEnrolButton(props.product)}>
                <span>{icon}</span>Enrol Now</button>

        </div>
    );
};

export default Product;