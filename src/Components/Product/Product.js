import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {addToCart} = props;
    const {id, name, price, picture} = props.product;
    return (
            <div className="col gx-4 mb-4">
                <div className="box-shadow">
                    <div className="banner">
                        <img className='img-fluid' src={picture} alt="" />
                    </div>
                    <div className="details p-3">
                        <h5>{name}</h5>
                        <p>Price: {price}</p>
                    </div>
                    <button onClick={()=>addToCart(props.product)} className='btn'>
                        Add To Cart
                        <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
    );
};

export default Product;