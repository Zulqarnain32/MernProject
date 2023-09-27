import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Components/Products'
import ProductContextProvider from './Global/ProductContextProvider'
import SingleProduct from './Components/SingleProduct'

const App = () => {
  return (
    <>
    <ProductContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              window.localStorage.length > 0 ? (
                <Products />
              ) : (
                <Login />
              )
            } 
          />

          <Route path="/auth/register" element={<Registration />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="products/single-product/:productId" element={<SingleProduct />} />

        </Routes>
      </BrowserRouter>
      </ProductContextProvider>  
    </>
  )
}

export default App
