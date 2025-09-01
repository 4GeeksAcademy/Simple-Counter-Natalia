import React from "react";


const SecondsCounter = (props) => {
  return (
  
    <div className="counter">
      <h1>
        <i className="fas fa-clock"></i> {props.patatas} seconds
      </h1>
    </div>
  );
};

export default SecondsCounter;
