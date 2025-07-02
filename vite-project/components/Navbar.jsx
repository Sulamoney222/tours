import React from 'react'
import {appleImg,searchImg,bagImg} from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <div>
      <>
      <header className='w-full py-5 sm:px-10 flex justify-between items-center'>
        <nav className=' flex w-full screen-max-width'>
            <img src={appleImg} alt='Apple'  width={14} height={50}/>

           <div className='flex flex-1 max-sm:hidden justify-center '>
            {
                navLists.map((nav)=>{
                 return(                   
                    <div key={nav} className='px-5 text-sm text-gray-500 cursor-pointer hover:text-white transition-all'>
                        <h3 className=' text-red'>{nav}</h3>
                    </div>
                 )
                })
            }
            </div> 
           
            
          <div className=' flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'> 
            <img src={searchImg} alt='Apple' width={14} height={18}/>
            <img src={bagImg} alt='Apple' width={14} height={18}/>
            </div> 
            
        </nav>
      </header>
      </>
    </div>
  )
}

export default Navbar
