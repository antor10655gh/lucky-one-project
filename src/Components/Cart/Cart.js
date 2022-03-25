import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const {picture, name} = props.cart;
    const removeCart = (id) =>{
        
    }
    return (
        <div className='row'>
            <div className="col">
                <div className='cart-items text-start mb-3'>
                    <img className='slt-product' src={picture} alt="" />    
                    <span>{name}</span>
                    <button onClick={()=>removeCart(props.cart)} className='trash-btn'>
                        <i className="fa-solid fa-trash trash-btn"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;