import React, { useState } from "react";

const UseStateCounter = () => {
  const [counterValue, setCounterValue] = useState(0);
/* => IMPORTANT */  const ComplexCounterIncrease = () => {
/* => IMPORTANT */    setTimeout(() => {
/* => IMPORTANT */      setCounterValue((prevState)=>{
/* => IMPORTANT */        return prevState+1;
/* => IMPORTANT */      })
/* => IMPORTANT */    }, 2000);
/* => IMPORTANT */  } 
  return (
    <section style={{ margin: "4rem 0" }}>
      <h3>Regular counter</h3>
      <h3>{counterValue}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <button
          className='btn'
          onClick={() => setCounterValue(counterValue + 1)}>
          Increase
        </button>
        <button
          className='btn'
          onClick={() => setCounterValue(counterValue - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={() => setCounterValue(0)}>
          Reset
        </button>
      </div>
      <br />
      <br />
      <section>
        <h3>Advanced counter</h3>
        <h3>{counterValue}</h3>
        <button className='btn' onClick={ComplexCounterIncrease}>
          Increase
        </button>
      </section>
    </section>
  );
};

export default UseStateCounter;
