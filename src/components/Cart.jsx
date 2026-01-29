import { useState } from "react"



export default function Cart({cartItems}){
    

    let itemCounts = {}
    cartItems.forEach(item=>{
        itemCounts[item.name] = (itemCounts[item.name] || 0) +1;

    })

    const uniqueItems = cartItems.filter((item,index)=>
        index === cartItems.findIndex(t=>t.name===item.name)
    )
    
    


    return(
        <>
            <div className="cart-box">
                <h3>Items in Cart</h3>
                {uniqueItems.map((item)=>(

                    <p key={item.name}>{item.name} {item.image} Count:{itemCounts[item.name]}
                    </p>
                    

                ))
                    
                }

                
                
            </div>

            
        </>
    )
}
