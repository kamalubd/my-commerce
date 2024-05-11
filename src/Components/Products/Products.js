import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Collections from '../Product/Product';

const Products = () => {
    const productsData = useLoaderData();
    
    return (
        <div>
            {
                productsData.map(product => <Collections
                key = {product.id}
                product = {product}
                ></Collections>)
            }
        </div>
    );
};

export default Products;