import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminParkItem from '../components/AdminParkItem'
import { getParkLocations, deletePark } from './AdminHelper'

function Admin () {
  const [parks, setParks] = useState([])

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getParkLocations()
      .then(({ parks }) => {
        setParks(parks)
        return null
      })
  }, [])

  function deleteItem (id) {
    // eslint-disable-next-line promise/catch-or-return
    return deletePark(id)
      .then((parks) => {
        setParks(parks)
        return null
      })
  }

  return (
    <div className='flex flex-col'>
      <Header />
      <div className='absolute inset-x-0.5 top-14 flex justify-center' >
        <p className='text-xl text-green-700'>SELECT A PARK FOR DETAILS</p>
      </div>
      <div>
        <h3>Parks</h3>
        <ul>
          {parks.map(park => <AdminParkItem key={park.id} parkListing={park} deleteItem={deleteItem} />)}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
