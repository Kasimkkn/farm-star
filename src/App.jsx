import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
      <Footer/>
      <Toaster position='top-center' />
    </>
  )
}

export default App