import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return <button className='bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded focus:outline-none' onClick={() => logout({ returnTo: window.location.origin })}>
    Logout
  </button>
}

export default LogoutButton
