import React, { useState, useContext } from 'react';

export const ProductsContext = React.createContext();

export function ProductsContextProvider({children}) {
    const [ products, setProducts ] = useState([
        {id: 1, name: "Apple iWatch 2020", price: 51},
        {id: 2, name: "iMac", price: 91},
        {id: 3, name: "iBook 2005", price: 9}
    ]);
    return (
        <ProductsContext.Provider value={[ products, setProducts ]}>
            {children}
        </ProductsContext.Provider>
    )
}

// making a custom hook!
export const useProductsContext = () => {
    return useContext(ProductsContext);
}