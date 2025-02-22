import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <h2><img src='https://tse3.mm.bing.net/th?id=OIP.6XLfYd7HmexAuT219bJvqQHaHa&pid=Api&P=0&h=180'/></h2>
      <div className='nav-links'>
        <ul>
            <Link to='/'>
            <h4 className='link'><a>Home</a></h4>
            </Link>

            <Link to='/contact'>
            <h4 className='link'><a>Categories</a></h4>
            </Link>

            <Link to='/About'>
            <h4 className='link'><a>About Us</a></h4>
            </Link>
          
          
          <h4></h4>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
