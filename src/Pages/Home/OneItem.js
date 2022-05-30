import React from 'react';
import { useCart } from 'react-use-cart';
const OneItem = ({product}) => {
    const {addItem}=useCart();
    return (
        <>
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4 justify-content-cente '>
        
        <div className="card p-3 overflow-hidden h-100 shadow  ">
            <img src={product.img} className='card-img-top img fluid' alt='' />
            <div className="card-bodd text-center">
             <h4 className="card-title">{product.title}</h4>
             <h3 className="card-text">{product.desc}</h3>
             <h4>${product.price}</h4>
             <button className="btn btn-primary" onClick={()=> addItem(product)}>Add to cart</button>
            </div>
        </div>
    
          </div>
        </>
    );
};

export default OneItem;