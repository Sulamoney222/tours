import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'
import Contact from './contact'
import './lady1.jpg'
import Nopage from './Nopage'
const App = () => {


  return (
    <>  
    <Router>
    <Navbar/>
    <Routes>
   <Route index element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='*' element={<Nopage/>}/>
   </Routes>
   </Router>
   
    </>
  )
}


export default App
