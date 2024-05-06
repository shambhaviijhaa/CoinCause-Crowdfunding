import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import logo from '../../LoginAssets/logo.png';
import vid from '../../LoginAssets/vid1.mp4';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineSwapRight } from 'react-icons/ai';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [regType, setRegType] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [userNameError, setUserNameError] = useState('');

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setRegType([...regType, value]);
    } else {
      setRegType(regType.filter((type) => type !== value));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateUserName = () => {
    if (!userName) {
      setUserNameError('Username is required');
      return false;
    }
    setUserNameError('');
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const createUser = () => {
    if (!validateEmail() || !validateUserName() || !validatePassword()) {
      return;
    }

    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      Password: password,
      RegType: regType,
    })
      .then((response) => {
        console.log('User has been created', response.data);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div>
      <div className="registerPage flex">
        <div className="container flex">
          <div className="vidDiv">
            <video src={vid} autoPlay loop muted className="vid"></video>

            <div className="txtDiv">
              <div className="footerDiv">
                <span className="text">Already a user?</span>
                <Link to="/login">
                  <button className="btn">Log In</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Img" className="logoimg" />
              <h3>Let Us Know You!</h3>
            </div>

            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="email">Email Id</label>
                <div className="input flex">
                  <AiOutlineMail className="icon" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                    onBlur={validateEmail}
                  />
                </div>
                {emailError && <span className="error">{emailError}</span>}
              </div>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={(event) => setUserName(event.target.value)}
                    onBlur={validateUserName}
                  />
                </div>
                {userNameError && <span className="error">{userNameError}</span>}
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={validatePassword}
                  />
                </div>
                {passwordError && <span className="error">{passwordError}</span>}
              </div>

              <div className="inputDiv">
                <center>
                  <label>You want to register as a:</label>
                </center>
                <div className="checkboxOptions">
                  <div className="checkboxOption">
                    <input
                      className="cb b1"
                      type="checkbox"
                      id="organization"
                      name="regtype"
                      value="org"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="organization">Organization</label>
                  </div>
                  <div className="checkboxOption">
                    <input
                      className="cb b2"
                      type="checkbox"
                      id="donor"
                      name="regtype"
                      value="donor"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="donor">Donor</label>
                  </div>
                </div>
              </div>

              <div className="buttons flex">
                <Link to="/">
                  <button className="btn flex" type="submit" onClick={createUser}>
                    <span>Sign In</span>
                    <AiOutlineSwapRight className="icon" />
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="">
        <a href="/Donor">Donor</a>
      </div>
      <div className="">
        <a href="/Org">Org</a>
      </div>
    </div>
  );
};

export default Register;
