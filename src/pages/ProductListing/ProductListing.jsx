import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApi } from '../../context/ApiContext';

const ProductListing = () => {
    // const products = [
    //     {
    //       imageSrc: 'https://via.placeholder.com/150',
    //       title: 'Producto 1',
    //       description: 'Descripción breve del producto 1',
    //       price: 19.99
    //     },
    //     {
    //       imageSrc: 'https://via.placeholder.com/150',
    //       title: 'Producto 2',
    //       description: 'Descripción breve del producto 2',
    //       price: 24.99
    //     }
    //   ];

    const { getItems } = useApi();
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const [items, setItems] = useState([]);

    useEffect(() => {
      getItems(search)
        .then(setItems)
        .catch(console.error);
    }, [search, getItems]);
    console.log(items)
  return (
    <div className="d-flex justify-content-center align-items-start vh-100 pt-5">
        <div className="w-100" style={{ maxWidth: '700px' }}>
            <div className="mb-4">
                <SearchBar />
            </div>
              <ProductList  items={items} />
        </div>
    </div>
  )
}

export default ProductListing