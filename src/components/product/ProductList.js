import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://fakestoreapi.com/products';

export default function ProductList() {
  // initial state is empty array
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // get data from api and set state
  const getData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  console.log(products);
  // useEffect callback getData function one time
  useEffect(() => {
    getData();
  }, []);

  const decrease = () => {
    return setQuantity(quantity - 1);
  };

  const increase = () => {
    return setQuantity(quantity + 1);
  };

  // render all the items in the state
  return (
    <div>
      <h1>Product List</h1>
      <div className='products-wrapper'>
        {products.map((p, i) => (
          <div className='product' key={i}>
            <h2 className='title'>{p.title}</h2>
            <p className='price'>${p.price}</p>
            <img src={`${p.image}`} alt={p.title} />
            <Link to={`/products/${p.id}`}>
              <button>More</button>
            </Link>
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
            <Link to='/cart'>
              <button>Add to cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
