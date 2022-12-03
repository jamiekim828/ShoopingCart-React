import { Link } from 'react-router-dom';
import './ProductList.css';

export default function ProductList({ products, handleAddToCart }) {
  // render all the items in the state
  return (
    <div className='list'>
      <div className='list-header'>
        <h1>Product List</h1>
      </div>
      <div className='products-wrapper'>
        {products.map((p, i) => (
          <div className='product' key={i}>
            <h2 className='title'>{p.title}</h2>
            <img src={`${p.image}`} alt={p.title} className='product-image' />
            <p className='price'>${p.price}</p>
            <div className='buttons'>
              <Link to={`/products/${p.id}`}>
                <button>More</button>
              </Link>
              <button onClick={() => {return handleAddToCart(p)}}>+ Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
