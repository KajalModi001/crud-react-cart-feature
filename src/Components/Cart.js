import React from 'react';
import { useCart } from './CartContext';
import Header from './Header';
import { MDBBtn } from 'mdb-react-ui-kit';

function Cart() {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <>
    <Header/>
    <div>

      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
            <br/>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price} <br/>(Quantity: {item.quantity})
             
              <MDBBtn className='removebutton' color='danger' onClick={() => handleRemove(item.id)}>Remove</MDBBtn>
            </li>
           
          ))}
          
        </ul>
        
      )}
    </div>
    </>
  );
}

export default Cart;
