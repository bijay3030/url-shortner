import React from 'react';
import './midsection.css';
import Mainimg from '../images/illustration-working.svg';



const midsection = () => {
  return (
    <div className="midsection">
      <div className="textpart">
        <div>
          <p className="header">
            More than just Shorter links
          </p>
        </div>

        <div>
          <p className="plaintext">
            Builds your brand recognition and get detailed insights on how your links are performing.
          </p>
        </div>
        <div>
          <button className="button">
            get started
          </button>
        </div>
      </div>
      <div className="image">
        <img src={Mainimg} className="mainimg" alt="mainimg" />
      </div>

    </div>

  )
}

export default midsection;