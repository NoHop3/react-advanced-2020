import React from "react";

const ErrorExample = () => {
  let title = "Random titlelonios";
  
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={()=>console.log(title)}>Change title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
