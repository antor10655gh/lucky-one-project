import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {id, name, price, picture} = props.product;
    return (
            <div className="col g-4">
                <div className="box-shadow">
                    <div className="banner">
                        <img className='img-fluid' src={picture} alt="" />
                    </div>
                    <div className="details p-3">
                        <h5>{name}</h5>
                        <p>Price: {price}</p>
                    </div>
                    <button className='btn'>
                        Add To Cart
                    </button>
                </div>
            </div>
    );
};

export default Product;