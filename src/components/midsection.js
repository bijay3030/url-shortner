import React from 'react';
import './midsection.css';
import Mainimg from '../images/illustration-working.svg';



const midsection = () => {
  return (
    <div className="midsection">
      <div className="textpart">
        <p className="header">
          More than just Shorter links
        </p>
        <p className="plaintext">
          Builds your brand recognition and get detailed insights on how your links are performing.
        </p>
        <button className="button">
          get started
        </button>
      </div>
      <div className="image">
        <img src={Mainimg} style={{ height: "300px " }} alt="mainimg" />

      </div>

    </div>

  )
}

export default midsection;