import { useState } from "react";
import Header from "./components/Header";
import PLANTS from './data.js'
import Cards from "./components/Cards.jsx";
import Cart from "./components/Cart.jsx";



export default function App() {
  
  const [cartItems,setCartItems]=useState([])

  function addToCart(plant){
    setCartItems(prev=>[...prev,plant])
  }


  return (
  <>
  <Header />
  <Cards plants={PLANTS} addToCart={addToCart}/>
  <Cart cartItems = {cartItems}/>
 </> 
)
}
