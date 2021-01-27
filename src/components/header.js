import React from 'react';
import './header.css';


const header = () => {
  return (
    <div className="navbar">

      <div className="navleft">
        <p className="Shortly">Shortly</p>
        <p className="feature">Features</p>
        <p className="feature"> Pricing</p>
        <p className="feature">Resources</p>
      </div>

      <div className="registration">
        <div>
          <p className="login"> Login</p>
        </div>
        <div>
          <button className="signup"> Signup</button>
        </div>
      </div>
    </div >
  )
}


export default header;