"use client"
import Colorbox from './Colorbox.js'
import Color from './Color.js'
import Button from './Button.js'
import './globals.css'
import React, { useState } from 'react';
const Page=()=>{
    const [boxColor, setBoxColor] = useState('white')
    const [data, setData] = useState({
        red: 0,
        blue: 0,
        green: 0,
        pink: 0
    })
  return (
    <div>
        <Color boxColor={boxColor} data={data}/>
        <Colorbox setBoxColor={setBoxColor} setData={setData}/>
    </div>
  )
}
export default Page;
