import React from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';


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
        <div className="hamburgerMenu" >
          <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" >
            <MenuIcon />
          </a>
        </div>
      </div>
    </div >
  )
}


export default header;