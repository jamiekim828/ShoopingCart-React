import React from 'react';

import ProductList from '../components/product/ProductList';

export default function Home({ products, handleAddToCart }) {
  return (
    <div>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}
