import React from 'react';

import CartList from '../components/cart/CartList';

export default function Cart({ cartItems }) {
  return (
    <div>
      <CartList cartItems={cartItems} />
    </div>
  );
}
