import React from 'react';

import image3 from '../../Asset/Images/image-3.jpg'
import image4 from '../../Asset/Images/image-4.jpg'
import image5 from '../../Asset/Images/image-5.jpg'
import OneItem from './OneItem';

const All_Items = () => {
    const prductData=[
        {
            id:1,
            img:image3,
            title:'mojahid',
            desc:'',
            price:49,
        },
        {
            id:2,
            img:image4,
            title:'jamil',
            desc:'',
            price:33,
        },
        {
            id:3,
            img:image5,
            title:'ahsan',
            desc:'',
            price:59,
        },
    ];


    return (
        <>
            <h1 className='text-center mt-4'>All Items</h1>
            <section className='py-4 container'>
                { <div className="row justify-content-center">
                    {
                      prductData.map(product => <OneItem
                        key={product.id}
                        product={product}
                        />) 
                    }
                
                </div>}

            </section>
        </>
    );
};

export default All_Items;