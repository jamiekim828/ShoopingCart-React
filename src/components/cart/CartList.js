import React from 'react';
import CartItem from './CartItem';

export default function CartList({ cartItems }) {
  return <CartItem cartItems={cartItems} />;
}
