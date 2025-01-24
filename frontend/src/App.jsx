import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Login from './Pages/Login'
import Navbar from './Component/Navbar'
import Grid from './Component/Grid'
import Footer from './Component/Footer'
import SearchBar from './Component/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/collection' element={<Collection></Collection>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/product/:productId' element={<Product></Product>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/place-order' element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App