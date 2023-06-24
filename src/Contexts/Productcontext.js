import React, { createContext, useEffect, useState } from 'react';
export const Productcontext = createContext();

const ProductProvider = ({children}) => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setproducts(data);
    };
    fetchProducts();
  }, []);
  return <Productcontext.Provider value={{products}}>{children}</Productcontext.Provider>;
};

export default ProductProvider;