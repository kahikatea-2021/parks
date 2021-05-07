import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header'
import Rating from './Rating'
import Facilities from './Facilities'
import Comments from './Comments'
import Footer from './Footer'

import { getPark, getComments } from './ParkDetailsHelper'

function ParkDetails () {
  const { id } = useParams()
  const [park, setPark] = useState([])
  const [comments, setComments] = useState([])
  const { name, address, url, image, playground, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = park

  useEffect(() => {
    getPark(id)
      .then((park) => {
        setPark(park)
        return null
      })

    getComments(id)
      .then((comments) => {
        setComments(comments)
        return null
      })
  }, [])

  return (
    <div className='flex flex-col'>
      <Header />
      
      <div style={{minHeight: 'calc(100vh - 172px)'}}>
        <div className='flex flex-col flex-col-reverse lg:flex-row justify-between mt-10 mx-14'>
          <div className='w-full lg:w-1/2' >
            <div className='flex flex-col lg:flex-row'>
              <h1 className='text-2xl mr-4 text-green-700'>{name}</h1>
              <Rating />
            </div>
            <p>{address}</p>
            <Facilities playground={playground} toilets={toilets} picnicSite={picnicSite} sportsField={sportsField} tramp={tramp} dogWalking={dogWalking} url={url} />
          </div>
          <div className='mb-4 lg:mb-0 lg:w-1/2'>
            <img src={image} alt="park image" width="100%" height="600"/>
          </div>
        </div>
        <Comments comments={comments} />
      </div>

      <Footer />
    </div>
  )
}

export default ParkDetails
