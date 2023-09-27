import React, { useContext } from 'react'
import { productConetxt } from '../Global/ProductContextProvider'
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(productConetxt)
  // console.log(products);
  return (
    <>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-box">
             <img src={product.image} alt="" className="product-image" />
             <h2 className="product-name">{product.name}</h2>
             <h2 className="product-price">${product.price}.00</h2>
             <button 
                className="view-product"> 
                <Link to = {`single-product/${product.id}`} key={product.id} className='detail'>Product Detail</Link>
              </button>
          </div>
        ))}
      </div>

    </>
  )
}

export default Products
