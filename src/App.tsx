import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './features/footer/Footer'
import Header from './features/header/Header'
import Main from './features/main/Main'
import TypesProduct from './features/typesProduct/TypesProduct'
import Products from './features/products/Products'
import Cart from './features/cart/Cart'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/types' element={<TypesProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App