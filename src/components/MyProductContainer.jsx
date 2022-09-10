import React from 'react';
import { useState, useEffect } from 'react';
import productJson from '../productList.json';
import { ProductList } from './ProductList';


const MyProductContainer = () => {
    const [products, setProducts] = useState([]);

    const getProducts = (data, time) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Error");
                }
            }, time);
        });

    useEffect(() => {
        getProducts(productJson, 2000)
            .then((res) => {
                setProducts(res)
            })
            .catch((err) => console.log(err, ": no hay productos"));
    }, [])

    return (
        <div className="Container">
            <div className='row'>
                <ProductList products={products}/>
            </div>
        </div>
    )
}
export default MyProductContainer