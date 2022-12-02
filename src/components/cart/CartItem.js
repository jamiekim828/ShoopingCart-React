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
            <div className='cart-list-img-div'>
              <img
                src={product.image}
                alt={product.title}
                className='cart-list-image'
              />
            </div>
            <div className='cart-item-title'>{product.title}</div>
            <div className='cart-item-price'>${product.price}</div>
            <div className='cart-btn-div'>
              <button
                onClick={() => handleDelete(product)}
                className='delete-btn'
              >
                -
              </button>
              <div className='cart-quantity'>{product.quantity}</div>
              <button onClick={() => add(product)} className='add-btn'>
                +
              </button>
              <button
                onClick={() => handleRemove(product)}
                className='remove-btn'
              >
                Remove
              </button>
            </div>
            <div className='sum-div'>${sumPrice(product)}</div>
          </div>
        ))}
      </div>
      <div className='total-div'>Total : ${totalPrice}</div>
    </div>
  );
}
