import React from 'react'
import { useState } from 'react';
import { createProduct } from '../../api';
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState([]);
    // const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);  
    const [usersRating, setUsersRating] = useState(0);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };


  

    const handleSubmit = async (e) => {
      e.preventDefault();
      // setMessage('');
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('short_description', shortDescription);
      formData.append('description', description);
      formData.append('stock', stock);
      formData.append('rating', rating); 
      formData.append('users_rating', usersRating); 
      
      if (image) {
        formData.append('image', image);
      }
      
      try {
        const res = await createProduct(formData); 
        console.log(res.message || 'Producto creado exitosamente');
        // Limpia el formulario
        setName('');
        setPrice('');
        setShortDescription('');
        setDescription('');
        setStock('');
        setRating(0);  
        setUsersRating(0); 
        setImage(null);
        document.getElementById('image').value = null;
        navigate(`/`);
      } catch (e) {
        console.log(e || 'Error al crear el producto');
      }

      
    }
  
  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            id="price"
            type="number"
            className="form-control"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="shortDescription" className="form-label">Descripción corta</label>
          <input
            id="shortDescription"
            type="text"
            className="form-control"
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <textarea
            id="description"
            className="form-control"
            rows="4"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input
            id="stock"
            type="number"
            className="form-control"
            value={stock}
            onChange={e => setStock(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (0 - 5)</label>
          <input
            id="rating"
            type="number"
            className="form-control"
            value={rating}
            min="0"
            max="5"
            onChange={e => setRating(e.target.value) || 0}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="usersRating" className="form-label">Usuarios Rating</label>
          <input
            id="usersRating"
            type="number"
            className="form-control"
            value={usersRating}
            min="0"
            onChange={e => setUsersRating(e.target.value) || 0}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Imágenes</label>
          <input
            id="image"
            type="file"
            className="form-control"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Subir producto</button>
        
      </form>
    </div>
  )
}

export default ProductForm