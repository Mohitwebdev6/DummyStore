import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Products from '../components/Products';
import ProductDetails from '../components/ProductDetails';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />

      
    </Routes>
  );
}

export default Router;
