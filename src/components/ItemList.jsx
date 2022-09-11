import React from 'react';
import { Product } from './Product'

const ItemList = ({ products }) => {
    return (
            <div>
                {products.length ?
                    (products.map((product) => <Product key={product.category}{...product} />)
                    ) : (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
            </div>
    );
};

export default ItemList;