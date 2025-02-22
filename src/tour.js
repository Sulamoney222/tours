import React from 'react'
import { useState, useEffect } from 'react'
import TourContent from './tourContent'
const url = 'https://www.course-api.com/react-tours-project'


//fetching the tours data
const Tour = () => {
    
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])



    const filterItems =(id)=>{
        const remove = tours.filter((tour)=>{
           return tour.id !== id
        })
        setTours(remove)

    }

  const fetchTours = async()=>{
        try {
            const data = await fetch(url)
        const result = await data.json()
        setLoading(false)
        setTours(result)     
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }
    }

  

useEffect(()=>{
    fetchTours()
},[])


    if(loading){
        return <h2>Loading...</h2>
    }
    if(tours.length ==0){
        return <button className='refresh' onClick={()=>{fetchTours()}}>Refresh to Load</button>
     }
  
 return (
    <>
    <TourContent tours ={tours} filterItems={filterItems}/>
    </>
 )

 
}

export default Tour
