import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";


//create your first component

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container text-center mt-5">
      <SecondsCounter patatas={seconds} />
    </div>
  );
};

export default Home;