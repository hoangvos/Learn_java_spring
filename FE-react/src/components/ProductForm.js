// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', type: '', place: '', warranty: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/products/${id}`)
                .then(response => setProduct(response.data))
                .catch(error => console.error('There was an error!', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:8080/product/${id}`, product)
                .then(() => navigate('/'))
                .catch(error => console.error('There was an error!', error));
        } else {
            axios.post('http://localhost:8080/product', product)
                .then(() => navigate('/'))
                .catch(error => console.error('There was an error!', error));
        }
    };

    return (
        <div>
            <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <input type="text" name="type" value={product.type} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Place</label>
                    <input type="text" name="place" value={product.place} onChange={handleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Warranty</label>
                    <input type="number" name="warranty" value={product.warranty} onChange={handleChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;
