import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('random title');
  return(
    <>
    <h2>{title}</h2>
    <button className='btn' onClick={()=>{
      if(title==='random title')setTitle('random titlelonios');
      else setTitle('random title');
      }}>Change title</button>
    </>
  ); 
};

export default UseStateBasics;
