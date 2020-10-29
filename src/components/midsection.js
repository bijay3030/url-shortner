import React from 'react';
import './midsection.css';
import Mainimg from '../images/illustration-working.svg';



const midsection = () => {
  return (
    <div class="midsection">
      <div class="textpart">
        <p class="header">
          More than just Shorter links
        </p>
        <p class="plaintext">
          Builds your brand recognition and get detailed insights on how your links are performing.
        </p>
        <button class="button">
          get started
        </button>
      </div>
      <div class="image">
        <img src={Mainimg} style={{ height: "300px " }} />

      </div>

    </div>

  )
}

export default midsection;