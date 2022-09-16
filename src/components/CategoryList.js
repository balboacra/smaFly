import React from 'react';
import { Product } from './Product'

export const CategoryList = ({ products }) => {
    return (
            <div>
                {products.length ?
                    (products.map((product) => <Product key={product.id}{...product} />)
                    ) : (
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
            </div>
    );
};
