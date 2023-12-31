import React from 'react';
import { ReactComponent as ACOSICOn2 } from "../icon/ACoS Logo 2.svg";
import { ReactComponent as Share } from '../icon/icon-03.svg';
import { ReactComponent as Email } from '../icon/icon-02.svg';
import { ReactComponent as Fb } from '../icon/icon-01.svg';
import '../style/landingpage/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="footer">
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col">
                  <Link to="/">
                    {" "}
                    <ACOSICOn2 style={{ height: 25 }} />
                  </Link>

                  <li className="mt-4 pt-4" style={{ listStyle: "none" }}>
                    <small>&copy; 2023 ACoS.app</small>
                  </li>
                </div>
                <div className="col">
                  <ul>
                    <li>
                      <Link to="/guide">How-to Guide</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul>
                    <li>
                      <Link to="/guide-policy">Conditions of use</Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy">Cookies</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <ul>
                <li>Get exclusive access to new tools as they're released</li>
              </ul>
              <input
                type="email"
                className="email-contact"
                style={{ marginLeft: "27px" }}
                placeholder="Email"
              />
              <button type="button" className="btn btn-dark ml-4">
                subscribe
              </button>

              <div class="row justify-content-end">
                <div class="col-auto">
                  <p style={{ marginRight: "150px" }}>
                    <Fb style={{ height: 10, marginLeft: 10 }} />
                    <Email style={{ height: 10, marginLeft: 10 }} />
                    <Share style={{ height: 10, marginLeft: 10 }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;