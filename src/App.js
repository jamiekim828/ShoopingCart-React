import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import ProductItem from './components/product/ProductItem';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/products/:id' element={<ProductItem />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
