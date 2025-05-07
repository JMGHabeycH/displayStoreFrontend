import React from 'react';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Home from './pages/Home/Home'
import ProductListing from './pages/ProductListing/ProductListing'
import Form from './pages/Form/Form';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/create" element={<Form />} />
    </Routes >
  )
}

export default App
