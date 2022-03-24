import React from 'react';
import './Cart.css'
const Cart = (props) => {
 const {cart}=props
let allproduct;
 for(const product of cart){
  allproduct=product.strMeal
 }
    console.log(cart);
    return (
        <div className='cart-container'>
            <h1>order summery</h1>
            <p>total item{cart.length}</p>
            <p>Name:{allproduct}</p>
        </div>
    );
};

export default Cart;