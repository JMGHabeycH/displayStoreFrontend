import React from 'react'
import ProductImage from '../Product/ProductImage';
import ProductTitle from '../Product/ProductTitle';


const ProductSummary = ({product}) => {
  
  console.log(product)
  
  return (
    <div className="container py-5 shadow-sm">
      <div className="row g-4 align-items-start">
        {/* Imagen grande a la izquierda */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <ProductImage imageSrc={product.image.data} name={product.name} style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}/>
        </div>

        {/* Información del producto a la derecha */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-start">
          <ProductTitle name={product.name} />
          <div className="mb-3">
            <span className="h5 align-middle me-2">{product.rating} ⭐</span>
            <span className="text-muted">({product.usersRating} votos)</span>
          </div>
          <p className="fs-3 fw-bold mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>

          <button
            className="btn btn-primary mb-2 w-100"
            
          >
            Comprar ahora
          </button>
          <button
            className="btn btn-outline-secondary w-100"
            
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSummary