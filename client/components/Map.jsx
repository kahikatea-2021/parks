import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// hard coded data to be used for position
// const lat = [-36.877796186450325]
// const lon = [174.78603054886526]
// const cordinates = [-36.8666700, 174.7666700]
// const addresses = '12 Morgan Street'
export default function Map ({ addresses, coordinates }) {
  return (
    <div className= 'w-96 ml-auto mr-auto mt-auto'>
      <MapContainer className='h-96'
        center={[-36.8666700, 174.7666700]}
        zoom={11}
        scrollWheelZoom={true}>
        <TileLayer
          url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q'/>
        <Marker key='1'
          position={[-36.8666700, 174.7666700]}
        >
          <Popup>
            An address of park
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  )
}