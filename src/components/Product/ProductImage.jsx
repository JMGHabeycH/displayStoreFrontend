import React from 'react'

const ProductImage = ({imageSrc, name, style}) => {
  return (
    <img
        src={imageSrc}
        alt={name}
        className="img-fluid rounded"
        style={style}
    />
          
  )
}

export default ProductImage