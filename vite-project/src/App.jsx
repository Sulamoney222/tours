import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import './App.css'


//451cab74

 

function App() {
 
    return(
      <>
      <main className=''>
       <Navbar/> 
       < Hero />
       <Highlights/>
       

      </main>
      </>
      
    )

   




}

export default App











































// const [movie, setMovie] = useState([])
//  const [loading, setLoading] = useState(true)
//  const [search, setSearch] = useState('')
  
//   const searchMovies = async (title) => {
//     try {
//        const data = await fetch(`${API_URL}&s=${title}`)
//        const response = await data.json()
//        setMovie(response.Search)
//        console.log(response.Search);
       
       
//     } catch (error) {
//       console.log(error);
      
//     }
//   }
 
//  useEffect(()=>{
//    searchMovies('titanic')
//    setLoading(false)
   
//  }, [])
  
//  //loading
//  if (loading) {
//    return(
//     <>
//     <h2>Loading....</h2>
//     </>
//    )
//  }



//   return (
//     <>
//     <div className="app">
      
//       <h1>MovieLand</h1>
       
//        <div className="search">
//         <input type="text" 
//         placeholder='search for movies'
//         value={search}
//         onChange={(e)=>setSearch(e.target.value)} />

//        <button onClick={()=>searchMovies(search)}>click</button>
//        </div>

//        <div className="container">
//         <div className="movie">
        
//        {
//        }

//           <div>
//         <Movie movies={movie}/>
//           </div>

//         </div>
//        </div>

//     </div>
//     </>
//   )
 