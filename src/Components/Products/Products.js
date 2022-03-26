import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(json=>setProducts(json));
    },[]);


    // add a function which is add to product on cart-container
    const addToCart = (product) =>{

        const selectedProduct = product;
        console.log(selectedProduct);
        let cartProduct = [];

        // this condition has been created for select unique product
        if(carts.includes(selectedProduct)){
            setCarts(carts);
        }
        else{
            cartProduct = [...carts, selectedProduct];
            if(cartProduct.length === 5){
                alert("You reached at maximum selection...");
            }
            else{
                setCarts(cartProduct);
            }
        }
        
        
    }

    // add a function which is remove all selected product from the cart-container
    const againSelect = () =>{
        setCarts([]);
    }

    return (
        <div className="container my-5">
            <div className="row gx-5">
                <div className="col-7 col-lg-8">
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                        {
                            products.map(product=><Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="col-5 col-lg-4 cart-container">
                    <div className="title text-start my-5">
                        <h2>Selected Drinks</h2>
                    </div>
                    {
                        carts.map(cart=><Cart
                            key={cart.id}
                            cart={cart}
                        ></Cart>)
                    }
                    <div className='mt-3'>
                        <button className='btn mx-1'>Select One</button>
                        <button onClick={againSelect} className='btn'>Again Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;