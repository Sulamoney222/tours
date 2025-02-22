import React,{useState} from 'react'
import ButtonCategory from './ButtonCategory'
import tourcategory  from './tourcategory'


//iterating over the buttons dynamically and automatically
const newCategory = [ 'all', ...new Set(tourcategory.map((category)=> category.name))]
console.log(newCategory);

const Tourfilter = () => {
     const [cities, setCities] = useState(tourcategory)
     const [category, setCategory] = useState(newCategory)


     

//filtering over the items
     const filterElement=(name)=>{

        if(name==='all'){
            setCities(tourcategory)
            return;
        }
        const newElement = tourcategory.filter((city)=>
            city.name === name)
        setCities(newElement)
     }

  return (
   <>
   <section className='filter'>
    <div>
       <ButtonCategory category={category} filterElement={filterElement} />
       <div className='all-items'>
       {
        cities.map((city)=>{
            const {img, name,desc, lang } = city

            return(
                <>
                <div className='card-container' key={name}>
                    <div className='new-content'>
                    <div className='card'>
                        <img src={img}/>
                        <div className='card-content'>
                            <p className='filter-name'>{name}</p>
                            <h2 className='filter-lang'>{lang}</h2>
                            <p className='next-desc'>{desc}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            )
        })
       }
       </div>
       </div>
   </section>
   </>
  )
}

export default Tourfilter


{/* <img src={img}/>
                    <h4>{name}</h4>
                    <h4>{desc}</h4>
                    <h4>{lang}</h4> */}