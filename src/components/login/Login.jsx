import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import asquaredlogo from "../../assets/logo-Asquared.png";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="back-to-website">
          <Link to="/">
            <IoIosArrowBack className="back-icon" />
            <span className='back-span'>Back to website</span>
          </Link>
        </div>
        <img src={asquaredlogo} alt="logo" className="login-logo" />
        <h2 className='login-heading'>{isLogin ? 'Login to your account' : 'Sign Up for an account'}</h2>
        <p>{isLogin ? "Don't have an account yet? " : "Already have an account? "} 
          <a href="#!" onClick={toggleForm}>{isLogin ? 'Sign Up' : 'Login'}</a>
        </p>
        <div className="social-login">
          <button className="google-btn"><FaGoogle /> Google</button>
          <button className="facebook-btn"><FaFacebookF /> Facebook</button>
        </div>
        <div className="divider">
          <hr className="line" /><p>or {isLogin ? 'login' : 'sign up'} with email</p><hr className="line" />
        </div>
        <form>
          {!isLogin && (
            <>
              <div className="input-container">
                <input type="text" placeholder="First Name" required />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Surname" required />
              </div>
            </>
          )}
          <div className="input-container">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
          </div>
          <p className='term-service'>By clicking “Continue” you agree to our Terms of Service and Privacy Policy.</p>
          <button type="submit" className="continue-btn">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;