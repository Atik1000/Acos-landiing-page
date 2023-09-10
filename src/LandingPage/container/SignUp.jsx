import "../style/landingpage/signup.css";

import { ReactComponent as ACOSICOn } from "../icon/ACoS-03.svg";
import { Link } from "react-router-dom";
import React from "react";
import googleIcon from "../icon/googleIcon.webp";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <ACOSICOn className="icon-signup" style={{ height: 50 }} />
        </div>
        <div className="d-flex justify-content-center">
          <div className="mb-4 pb-2  login-title">
            Log in or sign up to continue to ACoS.app
          </div>
        </div>
        <div className="d-flex justify-content-center button-contenct">
          <Link
            to="/dashbord"
            className="btn btn-sm btn-primary mb-3  sign-up-btn"
            style={{ fontSize: "30px", backgroundColor: "#108ACC" }}
          >
            <img src={googleIcon} alt="google-icon" className="google-icon " />
            Continue with Google
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <div className="login-bottom-title">
            By signing up you agree to{" "}
            <Link style={{ color: "#108ACC" }}>Terms and Conditions</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
