import React from 'react';

import CartList from '../components/cart/CartList';

export default function Cart({ cartItems, add, handleDelete, handleRemove }) {
  return (
    <div>
      {cartItems.length >0 ? <CartList
        cartItems={cartItems}
        add={add}
        handleDelete={handleDelete}
        handleRemove={handleRemove}
      /> : <div className='cartisempty'> Cart is empty </div>}
   
    </div>
  );
}
