import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

import {productsData} from '../data';

 const ShopContextProvider = ({children}) => {

    const [products, setProducts] = useState(productsData);

    return <ShopContextProvider value={{products}}>
        {children}
    </ShopContextProvider>
}

export default ShopContextProvider;

