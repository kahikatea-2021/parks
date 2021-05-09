import React from 'react'

import { Link } from 'react-router-dom'

import Nav from './Nav'

function Header () {
  return (
    <div className='flex justify-between mt-8 mx-14 items-center' >
      <div className='text-4xl' >
        <Link to="/main">
          <img className='flex flex-col bg-cover h-20' src='/images/logos/ProjectLogoFinal.png'/>
        </Link>
      </div>
      <Nav />
    </div>
  )
}

export default Header
