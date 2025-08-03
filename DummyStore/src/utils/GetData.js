import React from "react";
import axios from "../utils/axios";

export async function getProducts(setProducts) {
  try{
    const {data} = await axios("/products")
    setProducts(data);
  }catch(err){
    console.log(err)
  }
}

export  const getfilteredProducts = async (setFilteredProducts,category) => {
    const { data } = await axios.get(`/products/category/${category}`);
    setFilteredProducts(data);
  }



