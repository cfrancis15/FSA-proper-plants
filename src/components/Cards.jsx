import React from "react"
//import PLANTS from "../data"
//import { useState } from "react"


export default function Cards({plants}){


    
    console.log(plants)



    return(
        <>
    <h2>Plants</h2>
    <div>
    {plants.map((plant)=>(
        
       
            <p key={plant.id}>
            {plant.name} | 
            {plant.id} |
            {plant.image}
            </p>
        
        
    ))}
    </div>

    </>
    
)
}
