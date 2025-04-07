import React from 'react'
import '../styles/Want.css'
import img5 from '../assets/img5.jpeg'



function Want():React.JSX.Element {
  return (
    <div className='Want'>
        <div className='Want_left'>
            <h1>WANT TO SELL YOUR CAR</h1>
            <p>SELL US YOUR CAR IN 10 <br/> MINUTES</p>
            <ul>
                <li>Best Price</li>
                <li>Instant Payment</li>
                <li>Free RC transfer</li>
            </ul>
            <button>KNOW MORE {">"}</button>
        </div>
        <div className='Want_right'>
            <img alt="img5" src={img5}/>
        </div>
    </div>
  )
}

export default Want