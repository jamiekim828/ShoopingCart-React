import { Routes, Route } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import ProductItem from './components/product/ProductItem';
import Cart from './pages/Cart';

function App() {
  // initial state is empty array
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // get data from api and set state
  const url = 'https://fakestoreapi.com/products';
  const getData = async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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

  // routes to Home page, each product detail page, cart page
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <Home products={products} handleAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route path='/products/:id' element={<ProductItem />}></Route>
        <Route path='/cart' element={<Cart cartItems={cartItems} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
