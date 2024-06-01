// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <Link to="/add" className="btn btn-primary mb-3">Add Product</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Place</th>
                        <th>Warranty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.place}</td>
                            <td>{product.warranty}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                                <Link to={`/product/${product.id}`} className="btn btn-info btn-sm">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
