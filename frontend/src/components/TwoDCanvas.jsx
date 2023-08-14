import React from 'react'
import { useSelector } from 'react-redux';

const TwoDCanvas = () => {
  const cloth = useSelector(state=>state.cloth.clothType)
  return (
    <div>{cloth}</div>
  )
}

export default TwoDCanvas;