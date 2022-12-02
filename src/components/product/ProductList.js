import { Link } from 'react-router-dom';

export default function ProductList({ products, handleAddToCart }) {
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

            <button onClick={() => handleAddToCart(p)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
