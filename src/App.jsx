import { useState } from "react";
import Header from "./components/Header";
import PLANTS from './data.js'
import Cards from "./components/Cards.jsx";


export default function App() {
  // const [plants, setPlants] = useState(PLANTS)
  
  return (
  <>
  <Header />
  <Cards plants={PLANTS}/>
 </> 
)
}
