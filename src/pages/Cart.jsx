import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import CartItem from '../components/UI/CartItem';
import CardContext from '../Context/CartContext';
import '../styles/cart.css';


function Cart() {
    const CartContext = useContext(CardContext)
    const { product, setProduct } = CartContext;
    const [quantity, setQuantity] = useState(1)

    let productCart;
    product.map((item, index) => {
        productCart = [{...product[index], quantity: 10}]
    })
    

    console.log(productCart)
    console.log(productCart)

    // const sumQuantily = product.reduce((item) => item.id)
    const handelRemoveProduct = (id) => {
        const filter = product.filter((items) => items.id !== id)
        // console.log(filter)
        setProduct(filter)
    }

    // const increaseProduct = (item) => {
    //     item.quantity = 20
    // }

    const totalPrice = () => {
        let total = 0;
        product.map((item) => {
            total += item.price * quantity
        })
        return total;
    }
    return (
        <Container>
            <Row style={{height: '53vh'}}>
                {
                    !product.length ? (
                        <div className='notification__cart'>
                            <div>
                                <p className='text__cart'>Giỏ hàng của bạn hiện tại đang trống!</p>
                            </div>
                            <div className='return__home'>
                                <Link to='/'>Quay lại trang chủ</Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    {
                                        product?.map((item, index) => (
                                            <tr key={index}>
                                                <th><button className='remove-item' onClick={() => handelRemoveProduct(item.id)}><i class="ri-close-fill"></i></button></th>
                                                <td>{item.productName}</td>
                                                <td>{item.price} $</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price * quantity} $</td>
                                            </tr>
                                        ))
                                    }
                                    
                                    </tbody>
                            </table>
                            <span>Total: <b>{totalPrice()}$</b> </span>
                        </div>
                    )
                }
            </Row>
        </Container>
    );
}

export default Cart;