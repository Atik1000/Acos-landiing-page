// NotFound.js (Optional)
import React from "react";
import "../style/landingpage/notfound.css";
import oops from "../icon/oops.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div>
      <div className="top-area">
        <div className="d-flex justify-content-center">
          <img src={oops} alt="google-icon" />
        </div>

        <h2
          className="text-center"
          style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}
        >
          Opus Pro
        </h2>
        <p
          className="text-center"
          style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}
        >
          Oops!, something went wrong
        </p>
      </div>
      <div className="mid-area">
        <p
          className="text-center"
          style={{ fontSize: "20px", fontWeight: "normal" }}
        >
          There could be a misconfiguration in the system or a service outage.
          We track these errors automatically,but if the problem persists feel
          free to
        </p>
        <p
          className="text-center"
          style={{ fontSize: "20px", fontWeight: "normal" }}
        >
          Contact us.
        </p>
        <p
          className="text-center"
          style={{ fontSize: "20px", fontWeight: "normal" }}
        >
          Please try again.
        </p>
      </div>
      <div className="container">
        <div className="last-area">
          <div className="row">
            <div className="col">
              <p>TECHNICAL DETAILS</p>
              <Link style={{ textDecoration: "none" }}>
                See details for this error
              </Link>
            </div>
            <div className="col">
              <p>SUPPORT</p>
              <Link style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faUserGroup} className="mr-4" />
                Get Help
              </Link>
              <br />
              <br />
              <Link style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                login-support@opus.pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
