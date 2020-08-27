import React from 'react';
import './Course.css'
import CourseDetails from '../Fake Data/FakeData';
import { useState } from 'react';
import Product from '../Product/Product';
const Course = () => {
    console.log(CourseDetails);
    const [products, setProduct] = useState(CourseDetails);

    return (
        <div className="course">
            <div className="courseItems">
                <h1>Course Items</h1>
                <h1>Card Count: {products.length}</h1>
                {
                    products.map(product =><Product product={product}></Product> )
                }
            </div>
            <div className="card">
                <h1>Card Items</h1>
            </div>
        </div>

    );
};

export default Course;