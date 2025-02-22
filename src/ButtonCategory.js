import React from 'react'
import tourcategory from './tourcategory'

const ButtonCategory = ({filterElement, category}) => {
  return (
    <div>
      
<div class="but">
  {
    category.map((category)=>{
      return(
        <button className='tab-btn' 
        onClick={()=>filterElement(category)}>
          {category}</button>
      )
    })
  }
   
 </div>
    </div>
  )
}

export default ButtonCategory
