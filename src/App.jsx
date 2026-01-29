import { useState } from "react";
import Header from "./components/Header";
import PLANTS from './data.js'
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";
import './app.css'


export default function App() {
  
  const [cartItems,setCartItems]=useState([])

  function addToCart(plant){
    setCartItems(prev=>[...prev,plant])
  }


  return (
  <>
  
    <Header />
  <div className="master-box">
    <Cards plants={PLANTS} addToCart={addToCart} className='cards-component'/>
    <Cart cartItems = {cartItems} className='cart-component'/>
  </div>
 </> 
)
}
