import React from 'react'
import 'leaflet/dist/leaflet.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const initialPosition = [40.4178646, -3.7045134]

const getClassName = marker => {
  const smallPics = ['/images/zam1.jpeg', '/images/suzanne.jpeg', '/images/andrea.jpeg']
  const bigPics = ['/images/nunu.jpeg']
  
  if (smallPics.includes(marker.image)) {
    return 'smallPopup'
  } else if (bigPics.includes(marker.image)) {
    return 'bigPopup'
  } else {
    return 'mediumPopup'
  }
}


const MapComponent = props =>
  <Map style={{height: '100%', width: '100%'}} center={initialPosition} zoom={11}>
    <TileLayer
      url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {props.markers.map((marker, key) => (
      <Marker key={key} icon={marker.icon} position={marker.position}>
        <Popup className={getClassName(marker)}>
          <img style={{height: '250px'}} alt="" src={marker.image} />
          <p>Mural: {marker.mural}</p>
          <p>Model: {marker.name}</p>
        </Popup>
      </Marker>
    ))}
  </Map>

export default MapComponent
