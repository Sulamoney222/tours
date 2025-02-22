import React, { useEffect, useState } from 'react'


import Slider from './slider'
import Tour from './tour'
import Nopage from './Nopage'


const Home = () => {
  return (
    <div>
    <div className='headline'>
            <h1>This is your time to explore the world and<br></br> witness the beauty of nature</h1>
        </div>
      <Slider/>
      <Tour/>
      
    </div>
  )
}

export default Home
