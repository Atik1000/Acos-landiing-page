import "../style/landingpage/pricing.css";

import { ReactComponent as ACOSICOn } from "../icon/ACoS-03.svg";
import { ReactComponent as ACOSICOn2 } from "../icon/ACoS Logo 2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NoBsPricing from "../icon/no-bs-pricing-removebg-preview.png";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="container pricing">
        <div className="d-flex justify-content-center mb-4 pb-4">
          <ACOSICOn style={{ height: 25 }} />
        </div>
        <h1 className="text-center mb-2" style={{ fontSize: 70 }}>
          Try it free
        </h1>
        <p className="text-center no-credit">
          No Credit Card Required
          <br />
          No Monthly Fees
        </p>
        <div className="col d-flex justify-content-center">
          <div className=" subscription-plan-area row">
            <div className="col-md-2">
              <img
                src={NoBsPricing}
                alt="NoBsPricing"
                className="NoBsPricing"
              />
            </div>
            <div className="col-md-8">
              <h2 class="text-center subscription" style={{ fontSize: 60 }}>
                $0.01
              </h2>
              {/* <div className="d-flex justify-content-center"></div> */}
              <hr />
              <div className="text-center  keyword mb-2 ">
                per Keyword or Target
              </div>
              <div className="col d-flex justify-content-center">
                <Link
                  className="btn btn-primary"
                  to="/upload-file"
                  style={{
                    fontWeight: 700,
                    padding: "13px 28px",
                    fontSize: 20,
                    borderRadius: 10,
                    backgroundColor: "#108acc",
                    color: "white",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease", // Add transition property
                  }}
                  // Add hover styles
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#0e79b2")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#108acc")
                  }
                >
                  Start with 1000 free tokens
                </Link>
              </div>
              <div className="text-center target mt-2 " style={{fontSize:"15px"}}>
                Good to Optimize 1000 Keywords or Targets
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <div>
            <ul className=" subscribtion-item">
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Optimize your bids for a fraction of what you'll save in ad
                spend
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                Utilize your tokens whenever needed
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                No hidden charges, tiers and features
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="icon" />
                More tokens can be purchased at any time
              </li>
            </ul>

            <li className="text-center mt-4  pt-4 bit-optimizer-text">
              <ACOSICOn2
                style={{
                  height: 20,
                  marginRight: "20px",
                  marginBottom: "10px",
                }}
              />
              Bid optimization service that pays for itself
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
