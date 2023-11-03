import React from 'react'


function Button({buttonName, onClickHandler, buttonColor}) {
  return (
    <div className='Button'>
      <button onClick={()=>onClickHandler(buttonColor)} 
      style={{backgroundColor:buttonColor, color: 'white'}}>{buttonName}</button>
    </div>
  )
}

export default Button;

