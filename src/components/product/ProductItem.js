import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './ProductItem.css';

export default function ProductItem() {
  // get params for url
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const navigate = useNavigate();

  // set initial state as object
  const [item, setItem] = useState({});

  // get data of specific id
  const getItem = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  };

  // useCallback and url as dependency
  const catchData = useCallback(getItem, [url]);

  // useEffect call getItem one time
  useEffect(() => {
    catchData();
  }, [catchData]);

  // render the item detail
  return (
    <div>
      <div className='back-button'>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <div className='product-detail'>
        <div>
          <img src={`${item.image}`} alt={item.title} />
        </div>
        <div className='detail-contents'>
          <h1>Product Details</h1>
          <h2>{item.title}</h2>
          <p>${item.price}</p>
          <h3>About this product</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
