import React from 'react';

export default function CartList({ cartItems }) {
  console.log('hello', cartItems);
  return (
    <div className='cart-items'>
      <div className='cart-items-header'>Cart Items</div>
      {cartItems.length === 0 && <div>You have not added any items yet.</div>}

      <div>
        {cartItems.map((product) => (
          <div key={product.id} className='cart-list'>
            <img
              src={product.image}
              alt={product.title}
              className='cart-list-image'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
