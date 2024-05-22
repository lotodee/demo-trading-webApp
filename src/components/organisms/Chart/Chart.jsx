import React from 'react'
import Image from '../../atoms/Image/Image'
import tv  from "../../../assets/images/Trading view.svg"

import "./Chart.css"
const Chart = () => {
  return (
  <Image src={tv} className="main__chart-image"/>
//   <img src="/images/Trading view.svg" alt="" class="main__chart-image">
  )
}

export default Chart