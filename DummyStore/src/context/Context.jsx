import React, { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
import {getProducts} from "../utils/GetData";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = React.useState(null);

  useEffect(()=>{
    getProducts(setProducts)
  },[])
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
