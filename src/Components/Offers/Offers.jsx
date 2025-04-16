import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png';

function Offers() {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLING PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers