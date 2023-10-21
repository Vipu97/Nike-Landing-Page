import React from 'react'
import './Offer.css';

const Offer = () => {
  return (
    <div className="o-wrapper">
        <div className="o-left-part">
            <img src="images/offer.svg" alt="offer-image" />
        </div>
        <div className="o-right-part">
            <h1><span>Special </span>Offer</h1>
            <p>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <button className='orangeButton'>View details</button>
            <button>Learn more</button>
        </div>
    </div>
  )
}

export default Offer