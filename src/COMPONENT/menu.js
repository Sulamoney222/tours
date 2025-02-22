import React from "react";
import './lady1.jpg'


const Menu =({items})=>{

    return <>
    
    {
       items.map((item)=>{
        const {id, img, title, category, price, desc}= item

        return <div>
             <h2>{id}</h2>
            <img src={img}></img> 
             <h2>{title}</h2>
             <h2>{category}</h2>
             <h2>{price}</h2>
             <h2>{desc}</h2>
        </div>
       })
    }
    </>

}

export default Menu