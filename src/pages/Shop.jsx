import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../components/Title/Title';
import products from '../assets/data/products';
import { useEffect } from 'react';
import ProductList from '../components/UI/ProductList';
import '../styles/shop.css'

function Shop() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        setProduct(products);
    }, [])

    const handelChange = (e) => {
        const res = products.filter((item) => item.category === e.target.value)
        setProduct(res)
    }

    const handelChangePrice = (item) => {
        const result = products.filter((item) => item.price)
        if(item.target.value === 'increase') {
            const res = result.sort((a, b) => a.price - b.price)
            setProduct(res)
        } else if(item.target.value === 'decrease') {
            const res = result.sort((a, b) => b.price - a.price)
            setProduct(res)
        } else {
            setProduct(products)
        }
    
    }

    // const handelSearch = (e) => {
    //     console.log(e.target.value)
    //     const res = products.filter((item) => item.productName === e.target.value)
    //     setProduct(res)
    // }

    return (
        <Container style={{minHeight: "70vh"}}>
            <Title title="Shop"/>
            <Row>
                <Col>
                    <div className="filter-product">
                        <div className='filter-box'>
                            <div>
                                Sắp xếp theo loại
                            </div>
                            <select name="filterproduct" onChange={handelChange}>
                                <option value="sofa">Sofa</option>
                                <option value="chair">Chair</option>
                                <option value="mobile">Mobile</option>
                            </select>
                        </div>
                        <div className='filter-box'>
                            <div>
                                Sắp xếp theo giá
                            </div>
                            <select onChange={handelChangePrice}>
                                <option value="no-select">Không lựa chọn</option>
                                <option value="increase">Từ thấp đến cao</option>
                                <option value="decrease">Từ cao đến thấp</option>
                            </select>
                        </div>
                        <div className='filter-box'>
                            <input type="text" />
                            <i class="ri-search-line"></i>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <ProductList data={product}/>
            </Row>
        </Container>
    );
}

export default Shop;