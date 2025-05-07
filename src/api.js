import axios from 'axios';

const api = axios.create({
    baseURL: "https://displaystorebackend.onrender.com/api",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getItems = async (search = '') => {
    const searchQuery = typeof search === 'string' ? search : '';
    const res = await api.get('/products', {
        params: {q: searchQuery},
    });
    return res.data;
}

const getItemById = async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
};

const createProduct = async (productData) => {
    const res = await api.post('/products/create', productData, {
        headers:{
            'Content-type': 'multipart/form-data',
        },
    });
    return res.data;
}

export {api, getItemById, getItems, createProduct};