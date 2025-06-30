// App.js
import React, { useEffect, useState } from 'react';
import AdminNav from '../../Admin/modules/AdminNav.js';
import CrudNav from '../../Admin/modules/CrudNav.js';
import CreateForm from '../../../components/bar-form/CreateForm.js';

function List() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:8080/products");
                if (!res.ok) throw new Error("Failed to fetch products");
                const data = await res.json();
                setProducts(data);
            }
            catch (err) {
                console.log(err);
            }
        }
    fetchProducts();
    },[]);
    

    return (
        <ul>
            {
                products.map(product => (
                <li key={product.id}
                    className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200"
                    >
                    {product.name} - ${product.price}
                    </li>
                ))
            }
        </ul>
    );
}

export default List;