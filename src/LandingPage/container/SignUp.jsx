import React from 'react';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import { Link } from 'react-router-dom';
import '../style/landingpage/signup.css';
import googleIcon from '../icon/Google logo/1497553309-101_84843-removebg-preview.png';


const SignUp = () => {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <ACOSICOn className="icon-signup" style={{ height: 50 }} />
        </div>
        <div className="d-flex justify-content-center">
          <h5 className="mb-4 pb-4">Log in or sign up to continue to ACoS.app</h5>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mb-3 pb-3 sign-up-btn">
            {/* <img src={googleIcon} alt="google-icon" className="google-icon" /> */}
            Continue with Google
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <h5>
            By signing up you agree to <Link href="">Terms and Conditions</Link>{" "}
          </h5>
        </div>
      </div>
    );
};

export default SignUp;