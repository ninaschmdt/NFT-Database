import React from 'react'
import SalesFloorChange from './SalesFloorChange'

const SalesFloor = ( {data} ) => {
  return (
    <div>{data.address.geo.lat}
    <SalesFloorChange />
    </div>
  )
}

export default SalesFloor