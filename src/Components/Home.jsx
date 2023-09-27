import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
       <div className="home-container">
        <div className="home-content">
           <div>
               {/* <h1>Today Offer <span className='purple'>20%</span> off. The best outfit you will ever see.</h1> */}
               <h1>Dress to Impress <span className="orange">20% Discount</span> on <span className="orange">Stylish Attire!</span></h1>
               <p className="content">
               I offer a diverse range of clothing items in my collection, catering to various styles and preferences. From comfortable shirts that exude a timeless charm to versatile trousers that effortlessly complement any outfit, I provide a selection that suits every occasion. You'll also find an assortment of shoes that combine fashion and functionality, ensuring both comfort and style. To keep you warm on cooler days, there's a stylish jacket that adds an extra layer of sophistication to your ensemble. Whether you're looking for everyday essentials or statement pieces to elevate your wardrobe, my collection has you covered.
               </p>
               <Link to = "/products">
                  <button className='order-btn'>Order Now</button>
               </Link>      
           </div>
        </div>
        <div className="home-image">
           <div>
            <img src="/assets/image3.jpg" alt="" />
           </div>
        </div>
       </div>
    </>
  )
}

export default Home
