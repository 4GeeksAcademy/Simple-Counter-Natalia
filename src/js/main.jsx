import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css';

// components
import Home from './components/Home';


let seconds = 0;

const rerender = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home bananaCounter={seconds} />
    </React.StrictMode>
  );
};

setInterval(() => {
  seconds++;
  console.log(seconds);
  rerender();
}, 1000);
