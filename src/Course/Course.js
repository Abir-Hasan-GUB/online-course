import React from 'react';
import './Course.css'
import CourseDetails from '../Fake Data/FakeData';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Course = () => {
    const [products, setProduct] = useState(CourseDetails);
    const [cart, setCart] = useState([]);

    // add event handlers 
    const handleEnrolButton = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    };
    return (
        <div className="course">
            <div className="courseItems">
                {
                    products.map(product => <Product
                        product={product} key={product.key} 
                        handleEnrolButton={handleEnrolButton}
                    ></Product>)
                }
            </div>
            {/* import cart */}
            <div className="cartBody"> 
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Course;