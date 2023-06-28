import React from 'react'
const CardHeader = 'Bangladesh';
const CardPara = 'Bangladesh is a small country in south asia.';
const date = new Date();
const Day = date.getDate();
const Month = date.getMonth();
const Year = date.getFullYear();

export default function Card(props) {
    const {heading2, heading4} = props;
  return (
    <div className='Card'>
        <h2 className='heading2'>{heading2}</h2>
        <h4 className='heading4'>{heading4}</h4>
        <p className='para'>{Day + "/" + Month + "/" + Year}</p>
    </div>
  )
}
