import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import ProductItem from './components/product/ProductItem';
import Cart from './pages/Cart';
import './App.css';

function App() {
  // initial state is empty array
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // get data from api and set state
  const url = 'https://fakestoreapi.com/products';
  const getData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then((err) => console.log(err));
  };

  // useCallback and url as dependency
  const fetchData = useCallback(getData, [url]);

  // useEffect callback getData function one time
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // add to cart function
  const handleAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // delete the quantity of product
  const handleDelete = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: product.quantity - 1 }
            : item
        )
      );
    }
  };

  const navigate = useNavigate();
  // remove product from the cart
  const handleRemove = (product) => {
    if(cartItems.length > 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  } else {
    navigate('/')
  }
  };

  // routes to Home page, each product detail page, cart page
  return (
    <div className='app'>
      <NavBar cartItems={cartItems}/>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Home products={products} handleAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route path='/products/:id' element={<ProductItem />}></Route>
        <Route
          path='/cart'
          element={
            <Cart
              cartItems={cartItems}
              add={handleAddToCart}
              handleDelete={handleDelete}
              handleRemove={handleRemove}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
