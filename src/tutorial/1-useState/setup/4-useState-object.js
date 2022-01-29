import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "petar",
    age: 20,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({...person, message:'I jst changed thus'})
  }
  return <>
    <h2>{person.name}</h2>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>Change message</button>
  </>
};

export default UseStateObject;
