import React from "react";
import bananaImg from "../../img/banana.svg";

const SecondsCounter = ({ bananaCounter }) => {
  return (
    <div className="counter">
      <h1>
        <img
          src={bananaImg}
          alt="Banana"
          style={{ width: "120px", marginRight: "20px", marginTop: "10px" }}
        />
        {bananaCounter} bananas
      </h1>
    </div>
  );
};

export default SecondsCounter;
