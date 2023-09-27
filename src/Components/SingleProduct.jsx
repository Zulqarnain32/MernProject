import React, { useContext, useState } from 'react'
import { productConetxt } from '../Global/ProductContextProvider'
import { useParams } from 'react-router-dom'
import { FaBus, FaCar, FaExchangeAlt, FaStar, FaStarHalfAlt, FaWarehouse, } from 'react-icons/fa'

const SingleProduct = () => {
  const { products } = useContext(productConetxt)

  const { productId } = useParams();

  // console.log('URL Product ID:', productId);
  //   console.log('Product Data:', products);
  const selectedProduct = products.find((product) => product.id === parseInt(productId));
  const [image, setImage] = useState(selectedProduct.image)


  const handleImage1 = () => {
    setImage("/assets/shirt3.avif")
  }
  const handleImage2 = () => {
    setImage("/assets/jacket2.avif")
  }
  const handleImage3 = () => {
    setImage("/assets/shoe2.jpg")
  }
  const handleImage4 = () => {
    setImage("/assets/t5.jpg")
  }

  return (
    <>
      <div className="single-product-container">
        <div className="single-product-sub-container">
          <div className="single-image-container">
            <div className="img-box">
              <img src={image} className='single-image' />
              <div className="extra-images">
                <img src="/assets/shirt3.avif" className="extra-img" onClick={handleImage1} />
                <img src="/assets/jacket2.avif" className="extra-img" onClick={handleImage2} />
                <img src="/assets/shoe2.jpg" className="extra-img" onClick={handleImage3} />
                <img src="/assets/t5.jpg" className="extra-img" onClick={handleImage4} />
              </div>
            </div>
          </div>
          <div className="single-content-container">
            <div className="content-box">
              <div className="single-name">{selectedProduct.name}</div>
              <div className="ranking-stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /><FaStarHalfAlt />   <span className="review">(37 custumers reviews)</span>
              </div>
              <div className="cut-price">
                MRP : <strike>${selectedProduct.price}.00</strike>
              </div>
              <div className="deal">
                Deal of the Day: ${ selectedProduct.price - (selectedProduct.price *20/100)}.00
                
              </div>
              <div className="product-description">

                This <span className="bold">{selectedProduct.name}</span> is a great choice as it offers both quality and affordability. It's built to last and can withstand prolonged use without any issues.
                This <span className="bold">{selectedProduct.name}</span> are not only stylish but also incredibly durable, making them a smart investment for your wardrobe.
                This <span className="bold">{selectedProduct.name}</span> are both fashionable and practical, suitable for both formal occasions and casual outings.
                This <span className="bold">{selectedProduct.name}</span> combines fashion and function, ensuring you stay warm and stylish in any weather.
                Avail of our exclusive <span className='orange bold'>20%</span> discount offer on all products, ensuring substantial savings. With this discount, a product that was originally priced at
                <span className='orange bold'>
                  
                </span>
                 Rs. <span className="orange bold">${selectedProduct.price}.00 </span> is now priced at only Rs. 
                 <span className="orange bold"> ${ selectedProduct.price - (selectedProduct.price *20/100)}.00</span> .

              </div>
              <div className="easy">
                <div className="fast-del div">
                  <FaCar />
                  <div className="text">  Free Delievery</div>
                </div>
                <div className="replacement div">
                  <FaExchangeAlt />

                  <div className="text">30 Days Replacement</div>
                </div>
                <div className="store-del div">
                  <FaBus />
                  <div className="text">Farooq Delieverd</div>
                </div>
                <div className="warranty div">
                  <FaWarehouse />
                  <div className="text">2 years warranty</div>
                </div>
              </div>
              <div className="availability">
                Available: In Stock
              </div>
              <div className="brand">
                Brand  :    Apple
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
