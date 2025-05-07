import React from 'react'
// import { useEffect } from 'react'
import ProductImage from '../Product/ProductImage'
// import { useApi } from '../../context/ApiContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ productId, imageSrc, title, shortDescription, price }) => {
  // const {getItemById} = useApi();
  const navigate = useNavigate();

  
  const handleClick = () => {
    navigate(`/products/${productId}`)
  }


  return (
    <div onClick={handleClick}
      className="row align-items-center p-3 mb-3 border rounded g-0"
      style={{ maxWidth: '700px', width: '100%' }}
    >
      {/* Imagen a la izquierda */}
      <div className="col-12 col-sm-4 d-flex justify-content-center mb-3 mb-sm-0">
      <ProductImage imageSrc={imageSrc} name={title} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
      </div>

      {/* Recuadro a la derecha */}
      <div className="col-12 col-sm-8">
        <div className="border rounded p-3 h-100 d-flex flex-column justify-content-center">
          <h5 className="mb-2">{title}</h5>
          <p className="text-muted mb-2">{shortDescription}</p>
          <p className="fw-bold mb-0">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard