import React, {useState} from 'react'
import Menu from './menu'
import items from './item'
import Category from './category'
import './filter.css'


const All = () => {

  const [item, setItem] = useState(items)
  const [category, setCategory] = useState([])

const filterItems = (categories)=>{
  const someItems = items.filter(specific=>{
    specific.category === categories
  })
  setItem(someItems)


  
}




  return (
    <>
   <div className='container'>
    <div className='scontain'>
      <div className='item-package'>
        <h1>ddddjjddlj</h1>
      <Category filterItems ={filterItems}/>
        <Menu items={item}/>
       
       
      </div>
    </div>
   </div>
    </>
  )
}

export default All
