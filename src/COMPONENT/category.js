import React from 'react'

const category = ({filterItems}) => {
  return (
    <div>
        <button onClick={(()=>{filterItems('Favourite')})}> All</button>
        <button> All</button>
        <button> All</button>
      
    </div>
  )
}

export default category
