import React from 'react';

import './CartItem.css';

export default function CartItem({
  cartItems,
  total,
  add,
  handleDelete,
  handleRemove,
}) {
  // sum Each product's total price
  const sumPrice = (product) => {
    return product.price * product.quantity;
  };

  // sum All product's total price
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );
  const priceToPay = Math.floor(totalPrice);

  return (
    <div className='cart-items'>
      <div className='cart-items-header'>
        <h1>My Bag</h1>
        {cartItems.length === 0 && <div>You have not added any items yet.</div>}
        {cartItems.length > 0 && <div>Shipping Total: {total}</div>}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className='cart-list'>
            <img
              src={product.image}
              alt={product.title}
              className='cart-list-image'
            />
            <div className='cart-item-title'>{product.title}</div>
            <div>${product.price}</div>
            <div className='cart-btn-div'>
              <button onClick={() => handleDelete(product)}>-</button>
              <div>{product.quantity}</div>
              <button onClick={() => add(product)}>+</button>
              <button onClick={() => handleRemove()}>Remove</button>
            </div>
            <div>${sumPrice(product)}</div>
          </div>
        ))}
      </div>
      <div className='total-div'>Total : ${priceToPay}</div>
    </div>
  );
}
