import React from "react";
import Man1 from "../icon/man-1.png";
import Man2 from "../icon/man-2.png";
import "../style/landingpage/faq.css";
import FaqData from "./faqData";

const FAQ = () => {
  return (
    <>
      <FaqData />
      <div className="container faq">
        <h3 className="text-center mb-4">
          <b>Hear what others have to say</b>
        </h3>

        <div class="container">
          <div class="row mb-4 pb-4">
            <div class="col">
              <div className="box">
                <h4>
                  <b>A simple, but brilliant tool</b>
                </h4>
                <p>
                  <i>
                    I've been using ACoS.app for a few months now, and it has
                    transformed my advertising game. It has helped me eliminate
                    wasted ad spend, ultimately lowering my ACOS and increasing
                    my overall profitability. It's a simple, but brilliant tool.
                  </i>
                </p>

                <div className="testimonial-person">
                  <img
                    src={Man2}
                    alt="man"
                    className="man tertimonial-person-image"
                  />
                  <div className="testimonial-person-name-des">
                    <div className="testimonial-person-name">
                      <b>Ethan Roberts</b>
                    </div>
                    <div className="tertimonial-person-description">
                      {" "}
                      Astralite Corp
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="box"
                style={{ paddingTop: "10px !important", paddingBottom: "83px" }}
              >
                <h4>
                  <b>A for any Amazon seller</b>
                </h4>
                <p>
                  <i>
                    I've tried various tools to optimize my Amazon ads, but this
                    web app takes the cake. It helped me cut down on unnecessary
                    spending, and my ACOS has dropped significantly. It's a
                    must-have for any Amazon seller.
                  </i>
                </p>

                <div className="testimonial-person">
                  <img
                    src={Man1}
                    alt="man"
                    className="man tertimonial-person-image"
                  />
                  <div className="testimonial-person-name-des">
                    <div className="testimonial-person-name">
                      <b>Anthony Nelson</b>
                    </div>
                    <div className="tertimonial-person-description">
                      {" "}
                      Veridian Group{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
