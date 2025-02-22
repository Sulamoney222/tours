import React, {useState} from 'react'

const TourContent = ({tours, filterItems}) => {
  const [readMore, setReadMore]=useState(false)
  return (
    <div>
      {
         tours.map((tour)=>{
            const {id,name,info,image,price} =tour
            return(
                <>
                
                <section className='tour-center'>
                
    <div className="main-items" key={id}>
                    <img src={image} className='image-tour'/>
                    <article className='head-tour'>
                        <div className="tour-card">
                            <p className="name">{name}</p>
                            <p className="price">${price}</p>
                        </div>
                    </article>
                    <p className="category">
                       {readMore?info:`${info.substring(0,200)}... `
                       }
                       <button className='read' onClick={()=>{setReadMore(!readMore)}}>{readMore? `Show Less`: 'Read More'}</button>
                    </p>
                    <button onClick={()=> (filterItems)} className="tab-btn"><a  href='https://www.lufthansa.com/lhg/gb/en/dest/cy/stuttgart?&msclkid=8d6808a871191b6a12086f1d47320c2d&utm_source=bing&utm_medium=cpc&utm_campaign=FR_EN%20-%204_DE_France%20-%20Stuttgart%20(ANY%20-%20STR)%20(Broad%20Match)&utm_term=Stuttgart%20flight%20tickets&utm_content=FR-EN-EUR_Broad_France%20-%20Stuttgart%20(ANY%20-%20STR)&gclid=8d6808a871191b6a12086f1d47320c2d&gclsrc=3p.ds'>Explore</a></button>
                    </div>
    </section>

                </>
            )
        })
      }
    </div>
  )
}

export default TourContent
