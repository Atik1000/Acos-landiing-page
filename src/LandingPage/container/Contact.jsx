import React from "react";
import { ReactComponent as ACOSICOn } from "../icon/ACoS-03.svg";
import { ReactComponent as Message } from "../icon/icon-02.svg";
import "../style/landingpage/contact.css";

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div style={{width:"70%",marginLeft:"20%"}}>   
            <div className="d-flex justify-content-center">
              <ACOSICOn style={{ height: 25 }} />
            </div>
            <div className="d-flex justify-content-center mt-4 pt-4 mb-4 pb-4">
              <h1 className="h1" style={{fontSize:"50px"}}>Contact us</h1>
              <br />
            </div>
            <div className="d-flex justify-content-center mb-2 pb-2">
              <p style={{fontSize:"25px",fontWeight:"normal"}}>Send your questions, suggestions, or feedback.</p>
            </div>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center mt-2 pt-3">
                <button type="submit" className="btn btn-primary send-btn">
                  Send message
                </button>
              </div>
            </form>
            <div className="d-flex justify-content-center mt-2 pt-3">
              <p className="email-name">
                <Message style={{ height: 15, marginRight: 12 }} />
                info@acos.app
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
