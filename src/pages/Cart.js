import React from 'react';

import CartList from '../components/cart/CartList';

export default function Cart({ cartItems, add, handleDelete, handleRemove }) {
  return (
    <div>
      <CartList
        cartItems={cartItems}
        add={add}
        handleDelete={handleDelete}
        handleRemove={handleRemove}
      />
    </div>
  );
}
