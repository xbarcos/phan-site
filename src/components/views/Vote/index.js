import React from 'react'
import './index.css'
import gif from '../../../images/image03.gif'

const Vote = () => {
  return (
    <div className='Ask'>
      <h1 id="main-title">Do you believe in Phantom Thieves?</h1>
      <img src={gif} id="gif"></img>
    </div>
  )
}

export default Vote
