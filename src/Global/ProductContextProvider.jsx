import React, { createContext, useState } from 'react'

import jacket from "/assets/jacket.avif"
import jacket2 from "/assets/jacket2.avif"
import jacket3 from "/assets/jacket3.avif"
import jacket4 from "/assets/jacket4.avif"
import jacket5 from "/assets/jacket5.avif"

import shirt1 from "/assets/shirt1.avif"
import shirt2 from "/assets/shirt2.avif"
import shirt3 from "/assets/shirt3.avif"
import shirt4 from "/assets/shirt4.avif"
import shirt5 from "/assets/shirt5.avif"

import shoes1 from "/assets/shoe1.jpg"
import shoes2 from "/assets/shoe2.jpg"
import shoes3 from "/assets/shoe3.jpg"
import shoes4 from "/assets/shoe4.jpg"
import shoes5 from "/assets/shoe5.jpg"

import trouser1 from "/assets/t1.jpg"
import trouser2 from "/assets/t2.jpg"
import trouser3 from "/assets/t3.jpg"
import trouser4 from "/assets/t4.jpg"
import trouser5 from "/assets/t5.jpg"
import trouser6 from "/assets/t6.jpg"
import trouser7 from "/assets/t7.jpg"
import trouser8 from "/assets/t8.jpg"

export const productConetxt = createContext()

const ProductContextProvider = (props) => {

    const [products] = useState([

        { id: 1, name: 'Arctic Explorer Jacket', price: 100, image: jacket, status: 'hot' },
        { id: 2, name: 'Urban Streetwear Jacket', price: 120, image: jacket2, status: 'hot' },
        { id: 3, name: 'Leather Biker Jacket', price: 150, image: jacket4, status: 'hot' },
        { id: 4, name: 'Classic Denim Jacket', price: 110, image: jacket3, status: 'hot' },
        { id: 5, name: 'Quilted Puffer Jacket', price: 180, image: jacket5, status: 'hot' },
       
        { id: 6, name: 'Crisp White Button-Down Shirt', price: 100, image: shirt1, status: 'hot' },
        { id: 7, name: 'Plaid Flannel Shirt', price: 120, image: shirt2, status: 'hot' },
        { id: 8, name: 'Tropical Hawaiian Shirt', price: 110, image: shirt3, status: 'hot' },
        { id: 9, name: 'Classic Striped Polo Shirt', price: 200, image: shirt4, status: 'hot' },
        { id: 10, name: 'Chambray Work Shirt', price: 150, image: shirt5, status: 'hot' },
      
        { id: 11, name: 'Running Enthusiast Sneakers', price: 200, image: shoes1, status: 'hot' },
        { id: 12, name: 'Casual Canvas Shoes', price: 220, image: shoes2, status: 'hot' },
        { id: 13, name: 'Elegant Leather Loafers', price: 140, image: shoes3, status: 'hot' },
        { id: 14, name: 'Hiking Adventure Boots', price: 120, image: shoes4, status: 'hot' },
        { id: 15, name: 'Stylish High-Top Sneakers', price: 180, image: shoes5, status: 'hot' },   
        
        { id: 16, name: 'Slim-Fit Chinos', price: 80, image: trouser1, status: 'hot' },
        { id: 17, name: 'Cargo Pants', price: 90, image: trouser2, status: 'hot' },
        { id: 18, name: 'Tailored Dress Trousers', price: 120, image: trouser3, status: 'hot' },
        { id: 19, name: 'Distressed Denim Jeans', price: 130, image: trouser4, status: 'hot' },
        { id: 20, name: 'Athletic Joggers', price: 170, image: trouser5, status: 'hot' },
        { id: 21, name: 'Linen Summer Pants', price: 120, image: trouser6, status: 'hot' },
        { id: 22, name: 'Corduroy Casual Trousers', price: 130, image: trouser7, status: 'hot' },
        { id: 23, name: 'Wide-Leg Palazzo Pants', price: 100, image: trouser8, status: 'hot' },
        { id: 24, name: 'Arctic Explorer Jacket', price: 90, image: jacket3, status: 'hot' },
          
    ])
  return (
    <>
       <productConetxt.Provider value={{products}}>
         {props.children}
       </productConetxt.Provider>
    </>
  )
}

export default ProductContextProvider
