import React from "react";
import bananaImg from "../../img/banana.svg";

const SecondsCounter = ({ bananaCounter }) => {
const digits = bananaCounter.toString().padStart(6, "0").split("");

  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
     
      <img
        src={bananaImg}
        alt="Banana"
        style={{ width: "80px", marginTop: "5px" }}
      />


      <div className="d-flex">
        {digits.map((digit, index) => (
          <div
            key={index}
            className="digit-box mx-1 d-flex justify-content-center align-items-center"
          >
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;
