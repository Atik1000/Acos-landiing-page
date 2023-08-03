import React from 'react';
import '../style/landingpage/pricing.css';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import { ReactComponent as ACOSICOn2 } from '../icon/ACoS Logo 2.svg';
import NoBsPricing from '../icon/no-bs-pricing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
      <div id='pricing'>
        <div className="container pricing">
          <div className="d-flex justify-content-center mb-4 pb-4">
            <ACOSICOn style={{ height: 50 }} />
          </div>
          <h2 className="text-center mb-2">Try it free</h2>
          <p className="text-center no-credit">
            No Credit Card Required
            <br />
            No Monthly Fees
          </p>
          <div className="subscription-plan-area">
            <img src={NoBsPricing} alt="NoBsPricing" className="NoBsPricing" />
            <h2 class="text-center subscription">$0.01</h2>
            <hr />
            <p className="text-center target">per Keyword or Target</p>
            <div className="col d-flex justify-content-center">
              <Link className="btn btn-primary start-btn" to="/upload-file">
                Start with 1000 free tokens
              </Link>
            </div>
            <p className="text-center target">
              Good to Optimize 1000 Keywords or Targets
            </p>
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
              <p className="text-center mt-4  pt-4">
                <ACOSICOn2 style={{ height: 20, marginRight: 2 }} />
                Bid optimization service that pays for itself
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;