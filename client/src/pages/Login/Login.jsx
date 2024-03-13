import React, {useEffect, useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

import logo from '../../LoginAssets/logo.png'
import vid from '../../LoginAssets/vid1.mp4'
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {

  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  // const [loginRegType, setLoginRegType] = useState('')
  const navigateTo = useNavigate()

  // const [loginStatus, setLoginStatus] = useState('')
  // const [statusHolder, setStatusHolder] = useState("message")

  const loginDonor = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/logindonor', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
      LoginRegType: "donor"
    })
    .then((response) => {
      // console.log(response.data.message);

      if(response.data.message == "Credentials don't match"){
        navigateTo('/')
        alert("Enter a valid username and password")
        // setLoginStatus("Enter a valid username and password")
      }
      else{
        navigateTo('/donor')
      }
    })
    .catch(error => {
      console.error("Error logging in:", error);
    });
  };

  const loginOrg = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3002/loginorg', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword,
      LoginRegType: "org"
    })
    .then((response) => {
      // console.log(response.data.message);
      
      if(response.data.message == "Credentials don't match"){
        navigateTo('/')
        alert("Enter a valid username and password")
        // setLoginStatus("Enter a valid username and password")
      }
      else{
        navigateTo('/org')
      }
    })
    .catch(error => {
      console.error("Error logging in:", error);
    });
  };

  const onSubmit = ()=>{
    setLoginUserName('')
    setLoginPassword('')
  }

  // useEffect(()=>{
  //   if(loginStatus !== 'Enter a valid username and password'){
  //     setStatusHolder('showMessage')
  //     setTimeout(()=>{
  //       setStatusHolder('message')
  //     }, 4000)
  //   }
  // }, [])

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
                <button className="btn">Sign Up</button></Link>
              </div>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Img" className='logoimg'/>
              <h3>Welcome Back!</h3>
            </div>

            <form action="" className='form grid' onSubmit={onSubmit}>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon'/>
                  <input type="text" id='username' placeholder='Enter username' onChange={(event)=>{
                    setLoginUserName(event.target.value)
                  }}/>
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon'/>
                  <input type="password" id='password' placeholder='Enter password' onChange={(event)=>{
                    setLoginPassword(event.target.value)
                  }}/>
                </div>
              </div>

              {/* <span className={statusHolder}>{loginStatus}</span> */}

              <div className="buttons flex">
                {/* <Link to='/org'> */}
                  <button className="btn flex" type='submit' onClick={loginOrg}>
                    <span>Log In as Organization</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                {/* </Link> */}

                {/* <Link to='/donor'> */}
                  <button className="btn flex" type='submit' onClick={loginDonor}>
                    <span>Log In as Donor</span>
                    <AiOutlineSwapRight className='icon'/>
                  </button>
                {/* </Link> */}
              </div>

              {/* <span className="forgotPassword">Forgot your password? <a href="">Click Here</a></span> */}

            </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Login