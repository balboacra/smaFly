import React from 'react';
import { useState, useEffect } from 'react';
import productJson from '../productList.json';
import { ProductList } from './ProductList';
import Row from 'react-bootstrap/Row';

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
                console.log(res)
                setProducts(res)
            })
            .catch((err) => console.log(err, ": no hay productos"));
    }, [])

    return (
            <div className="container d-flex justify-content-center">
                <Row>
                    <div className="col-md-4">
                        <ProductList products={products} />
                    </div>
                    <div className="col-md-4">
                        <ProductList products={products} />
                    </div>
                    <div className="col-md-4">
                        <ProductList products={products} />
                    </div>
                </Row>
            </div>
    )
}
export default MyProductContainer