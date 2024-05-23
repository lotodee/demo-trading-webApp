import React from 'react'
import useReloadOnMount from '../../../../useReloadOnMount'
import "./Wallet.css"
const Wallet = () => {
  useReloadOnMount()
  return (
    <div className='wallet'>Wallet</div>
  )
}

export default Wallet