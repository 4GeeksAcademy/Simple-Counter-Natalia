import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = (props) => {
  return (
    <div>
      <h1 className="text-center mt-4"> BANANA COUNTER  </h1>

      <div className="container d-flex justify-content-center mt-5">
        <div className="card shadow-lg p-4 rounded" style={{ maxWidth: '600px', backgroundColor: '#fff70057' }}>
          <SecondsCounter bananaCounter={props.bananaCounter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
