import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(json=>setProducts(json));
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                        {
                            products.map(product=><Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="col-3">
                    <h1>hi</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;