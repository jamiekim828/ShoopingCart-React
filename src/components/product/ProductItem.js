import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

  // useEffect call getItem one time
  useEffect(() => {
    getItem();
  }, []);

  // render the item detail
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <h1>Product Details</h1>
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <h3>About this product</h3>
      <p>{item.description}</p>
      <img src={`${item.image}`} alt={item.title} />
    </div>
  );
}
