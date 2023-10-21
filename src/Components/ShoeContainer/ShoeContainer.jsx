import React from 'react'
import './ShoeContainer.css';

const ShoeContainer = ({link,rating,name,price}) => {
  return (
    <div className='shoe-container'>
        <img src={link} alt="shoe" />
        <p className='icon-rating'>
            <img src="icons/star.svg" alt="star-icon" />
            <span>({rating})</span>
        </p>
        <p className='name'>{name}</p>
        <p className='price'><span>$</span>{price}</p>
    </div>
  )
}

export default ShoeContainer