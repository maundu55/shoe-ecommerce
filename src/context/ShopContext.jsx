import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

import {productsData} from '../data';

 const ShopContextProvider = ({children}) => {

    const [products, setProducts] = useState(productsData);

    const [cart, setCart] = useState([]);
    const[quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart =(product, id) =>{
        const cartItem = cart.find((item)=>{
            return item.id === id
        })
        if(cartItem){
            const newCart =[...cart].map((item)=>{
                if(item.id === id){
                    return {...item, amount:cartItem.amount +1}
                } else{
                    return item;
                }
            })
        }
    }

    return <ShopContext.Provider value={{products}}>
        {children}
    </ShopContext.Provider>
}

export default ShopContextProvider;

