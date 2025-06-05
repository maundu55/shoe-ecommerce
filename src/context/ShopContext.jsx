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
            });
            setCart(newCart);
        }else {
            setCart([...cart, {...product, amount:1}]);
        }
    }

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem)=>{
            const priceAsNumber = parseFloat(currentItem.price)
            if(isNaN(priceAsNumber)){
                return accumulator;
            }else {
                return accumulator + (priceAsNumber * currentItem.amount);
            }
        }, 0);
        setTotalPrice(total);
    },[cart]);

    useEffect(() => {
        if(cart){
            const amount = cart.reduce((accumulator, currentItem)=>{
                return accumulator + currentItem.amount;
            }, 0)
            setQuantity(amount);
        }

   }, [cart]);

   const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    const clearCart =()=>{
        setCart([]);
        
    }

    const increaseAmount =(id)=>{
        const cartItem = cart.find((item)=>item.id === id)
            addToCart(cartItem, id);
    }

    const decreaseAmount =(id)=>{
        const cartItem = cart.find((item)=> {return item.id === id})

        if(cartItem){
            const newCart = cart.map((item)=>{
                if(item.id ===id){
                    return {...item, amount: cartItem.amount -1}
                }else{
                    return item;
                }
            })
            setCart(newCart)
        } else{
            if(cartItem.amount < 2){
                removeFromCart(id);
            }
        }
    }

    return <ShopContext.Provider value={{products, addToCart, cart, quantity, totalPrice, removeFromCart, clearCart, increaseAmount, decreaseAmount}}>
        {children}
    </ShopContext.Provider>
}

export default ShopContextProvider;

