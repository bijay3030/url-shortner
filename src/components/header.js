import React from 'react';
import './header.css';


const header = () => {
  return (
    <div className="navbar">

      <div>
        <div className="shortly">
          <p className="Shortly">Shortly</p>
        </div>

        <div className="features">
          <p className="feature">Features</p>
          <p className="pricing"> Pricing</p>
          <p>Resources</p>
        </div>
      </div>
      <div className="registration">
        <p className="login"> Login</p>
        <button className="signup"> Signup</button>
      </div>
    </div >
  )
}


export default header;