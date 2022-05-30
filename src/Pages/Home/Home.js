import React from 'react';
import { CartProvider } from 'react-use-cart';


import Banner from '../Banner/Banner';
import All_Items from './All_Items';
import Cart from './Cart';
import Products from './Components/Products';

const Home = () => {
    return (
       <>
        <Banner />
          

       <CartProvider>
       <All_Items /> 
        <Cart />
     </CartProvider>
        <Products />  
     
       </>
    );
};

export default Home;