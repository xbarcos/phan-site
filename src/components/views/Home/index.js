import React from 'react'
import logo from '../../../images/logo.png'
import take from '../../../images/take.png'
import './index.css'

const Home = () => {
  return (
    <div className='box'>
        <div className='logo'>
            <img src={logo} id="logo"></img>
        </div>
        <div>
            <img src={take} id="take-your-heart"></img>
        </div>
    </div>
  )
}

export default Home
