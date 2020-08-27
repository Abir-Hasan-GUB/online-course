import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, rating, price } = props.product;
    console.log(props);
    return (
        <div className="productDescription">
            
            <div className="productImg">
                <img src={img} alt="img"/>
            </div>
                <h1>{name}</h1>
                <h2>Price: $ {price}</h2>
                <p>Ratting: {rating} ⭐⭐⭐⭐</p>
            <button className="button">Enrol Now</button>
            
        </div>
    );
};

export default Product;