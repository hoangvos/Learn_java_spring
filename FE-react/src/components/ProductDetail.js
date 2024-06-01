// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('There was an error!', error));
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/product/${id}`)
            .then(() => navigate('/'))
            .catch(error => console.error('There was an error!', error));
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Type: {product.type}</p>
            <p>Place: {product.place}</p>
            <p>Warranty: {product.warranty} years</p>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default ProductDetail;
