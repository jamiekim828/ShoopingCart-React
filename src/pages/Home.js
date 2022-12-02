import React from 'react';

import ProductList from '../components/product/ProductList';

export default function Home({ products, handleAddToCart }) {
  return (
    <div className='product-list-wrapper'>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
}
