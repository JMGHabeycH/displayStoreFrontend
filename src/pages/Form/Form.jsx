import React from 'react'
import ProductForm from '../../components/ProductForm/ProductForm'

const Form = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='container bg-white d-flex flex-column justify-content-center align-items-center rounded shadow-sm gap-3 p-4 w-100'   style={{ maxWidth: '700px' }}>
            <div className='container-lg'>
                <div className='d-flex flex-column  align-items-center'>
                    <h1>Publica tu producto</h1>
                </div>
                
                <ProductForm />
            </div>
        </div>
    </div>
  )
}

export default Form