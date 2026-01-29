import React, { useState } from "react"
import './cards.css'


export default function Cards({plants,addToCart}){


    return(
        <>
    <h2>Plants</h2>
    <div>
    {plants.map((plant)=>(
        
       
            <div 
            className="plant-box"
            key={plant.id}
            >
            <p>{plant.name}</p>
            <p>{plant.id}</p>
            <p>{plant.image}</p>
            <button
            onClick={(e)=>{
            e.preventDefault()
                addToCart(plant)
            }}
            >Add to Cart</button>
            </div>
        
        
    ))}
    </div>


    </>
    
)
}
