import React from 'react';
import ProductSummary from '../../components/ProductSummary/ProductSummary'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApi } from '../../context/ApiContext';

const ProductDetails = () => {
  const {getItemById} = useApi();
  const {id} = useParams(); 
  const [product, setProduct] = useState();
  useEffect(() => {
    if(!product){
      getItemById(id)
      .then(setProduct)
      .catch(console.error);
    }
  });
console.log(product)

   if(!product){
    return(
      <div>
        Error de carga
      </div>
    )
   } 
    
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <ProductSummary product={product}/>
    </div>
  )
}

export default ProductDetails