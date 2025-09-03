import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = (props) => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '400px' }}>
        <SecondsCounter bananaCounter={props.bananaCounter} />
      </div>
    </div>
  );
};

export default Home;

