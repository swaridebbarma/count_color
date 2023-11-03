import React from 'react'

function Color({boxColor='white', data={red:0,blue:0,green:0,pink:0}}) {
  return (
    <div className='mainColorBox'>
      <div className='colorBox' style={{backgroundColor:boxColor}}> </div>
      <div className='countContainer'>
        <div>
          <p>Red - <span>{data.red}</span></p>
          <p>Blue - <span>{data.blue}</span></p>
        </div>
        <div>
          <p>Green - <span>{data.green}</span></p>
          <p>Pink - <span>{data.pink}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Color;
