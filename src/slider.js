import React,{useState, useEffect} from 'react'
import datas from './datas'
import './lady1.jpg'

const Slider = () => {
    const [people, setPeople] = useState(datas)
    const [index, setIndex] = useState(0)

    useEffect(()=>{
 if(index<0){
    const newIndex= people.length-1
    setIndex(newIndex)
 }
 if(index > people.length-1){
    setIndex(0)
 }
    },[index, people])
     
// https://course-api.netlify.app/api/react-tours-project
    useEffect(()=>{
  let slider=  setInterval(() => {
        setIndex(index+1)
       }, 4000);
       return ()=>{clearInterval(slider)}
       
    }, [index])
  return (
    <>
       <section className='first'>
        
      <div className='first-contain'>
        
     {
        people.map((data, personData)=>{
            const {img, text} = data
            let position = 'item lastSlide'
            if(personData === index){
                position = 'item activeSlide'
            }
            if(personData == index - 1 || (index===0 && personData===people.length-1)){
                position = 'item nextSlide'
            }
            return(
                <>
                <div className ={position}>
                <img className='picture'src={img}/>
                <h2 className='picture-text'>{text}</h2>
                </div>
                </>
            )
        })
     }
       <button className='previous' onClick={()=> setIndex(index -1)}>Previous</button>
       <button className='next'onClick={()=> setIndex(index +1)}>Next</button>
      </div>
    </section>
    </>
  )
}

export default Slider


// <h2>Achieve your adventurous dreams to explore around the world</h2>
// <p>Stay updated with our tour trends. Don't miss out!</p>