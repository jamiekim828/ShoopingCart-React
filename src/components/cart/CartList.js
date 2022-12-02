import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

export default function CartList({
  cartItems,
  add,
  handleDelete,
  handleRemove,
}) {
  // total quantity of the products in the cart
  const [total, setTotal] = useState(0);
  const quantityArray = cartItems.map((element) => element.quantity);

  useEffect(() => {
    setTotal(() => quantityArray.reduce((a, b) => a + b));
  }, [quantityArray]);

  return (
    <div className='cart-list-wrapper'>
      <CartItem
        cartItems={cartItems}
        total={total}
        add={add}
        handleDelete={handleDelete}
        handleRemove={handleRemove}
      />
    </div>
  );
}
