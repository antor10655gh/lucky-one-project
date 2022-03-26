import React from 'react';

const ChoseOne = () => {
    return (
        <div className='row'>
            <div className="col">
                <div className='cart-items text-start mb-3' id={id}>
                    <img className='slt-product' src={picture} alt="" />    
                    <span>{name}</span>
                    {/* <button onClick={()=>removeCart(id)} className='trash-btn'>
                        <i className="fa-solid fa-trash trash-btn"></i>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ChoseOne;