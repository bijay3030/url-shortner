import React from 'react';
import './header.css';


const header = () => {
  return (
    <div class="navbar">

      <div>
        <div class="shortly">
          <p class="Shortly">Shortly</p>
        </div>

        <div class="features">
          <p class="feature">Features</p>
          <p class="pricing"> Pricing</p>
          <p>Resources</p>
        </div>
      </div>
      <div class="registration">
        <p class="login"> Login</p>
        <button class="signup"> Signup</button>
      </div>
    </div >
  )
}


export default header;