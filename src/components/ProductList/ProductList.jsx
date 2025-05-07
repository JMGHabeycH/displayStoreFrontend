import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ items }) => {
  return (
    <div className="container py-4">
      {items.map((item, index) => (
        <ProductCard
          key={index}
          productId={item.id}
          imageSrc={item.image.data}
          title={item.name}
          shortDescription={item.shortDescription}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default ProductList