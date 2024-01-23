import React from 'react'
import './Form.css';

const Form = () => {
  return (
    <div className="form-wrapper" id='contact-us'>
        <div className="form-text-part">
            <h1>Sign Up from <span>Updates </span>& Newsletter</h1>
        </div>
        <div className='input-part'>
            <input type="text" placeholder='subscribe@nike.com'/>
            <button className='orange-btn'>Sign Up</button>
        </div>
        <button className='orange-btn'>Sign Up</button>
    </div>
  )
}

export default Form