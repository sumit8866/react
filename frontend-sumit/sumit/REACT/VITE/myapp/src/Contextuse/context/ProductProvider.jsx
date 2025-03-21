import React from "react";
import ProductContext from "./ProductContext";
import { useState, useEffect } from "react";

const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState([]);
  const [CartProduct, setCartProduct] = useState([]);

  return (
    <div>
      <ProductContext.Provider value={{ product, setProduct , setCartProduct , CartProduct }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;