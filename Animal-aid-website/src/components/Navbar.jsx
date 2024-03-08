import React from 'react'
import logoimg from '../images/logoimg.png'

function Navbar() {
  return (
    <div className='w-full px-8 py-2 bg-teal'>
        <div className='logo w-16'>
            <img src={logoimg} alt="" / >
        </div>
        
    </div>
        
  )
}

export default Navbar