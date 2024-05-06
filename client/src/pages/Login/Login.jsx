import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import ErrorPopup from '../../components/ErrorPopup';

import logo from '../../LoginAssets/logo.png';
import vid from '../../LoginAssets/vid1.mp4';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigateTo = useNavigate();

  const login_ = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
      LoginRegType: "org"
    })
    .then((response) => {
      if(response.data.message === "Credentials don't match") {
        setErrorMessage("Enter a valid username and password");
      } else {
        navigateTo('/org');
      }
    })
    .catch(error => {
      console.error("Error logging in:", error);
    });

    e.preventDefault();
    Axios.post('http://localhost:3002/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
      LoginRegType: "donor"
    })
    .then((response) => {
      if(response.data.message === "Credentials don't match") {
        setErrorMessage("Enter a valid username and password");
      } else {
        navigateTo('/donor');
      }
    })
    .catch(error => {
      console.error("Error logging in:", error);
    });
  };

  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');
  };

  const closeErrorPopup = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <div className="loginPage flex">
        <div className="container flex">
          <div className="vidDiv">
            <video src={vid} autoPlay loop muted className='vid'></video>
            <div className="txtDiv">              
              <div className="footerDiv">
                <span className="text">Don't have an account?</span>
                <Link to='/register'>
                  <button className="btn btn_">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Img" className='logoimg'/>
              <h3>Welcome!!!</h3>
            </div>
            <form action="" className='form grid' onSubmit={onSubmit}>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon'/>
                  <input type="text" id='username' placeholder='Enter username' onChange={(event) => setLoginUserName(event.target.value)} value={loginUserName} />
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon'/>
                  <input type="password" id='password' placeholder='Enter password' onChange={(event) => setLoginPassword(event.target.value)} value={loginPassword} />
                </div>
              </div>
              <div className="buttons flex">
                <button className="btn flex" type='submit' onClick={login_}>
                  <span>Log In</span>
                  <AiOutlineSwapRight className='icon'/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {errorMessage && <ErrorPopup message={errorMessage} onClose={closeErrorPopup} />}
    </div>
  );
}

export default Login;
