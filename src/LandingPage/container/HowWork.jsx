import React from "react";
import whatisACos from "../icon/Screenshot.png";
import "../style/landingpage/howwork.css";
import { Link } from "react-router-dom";

const HowWork = () => {
  return (
    <div id="how-it-work">
      <div className="container how-work">
        <div className="row align-items-center">
          <div className="col">
            <img src={whatisACos} alt="whatisACos" className="whatisACos" />
          </div>
          <div className="col">
            <h5 className="pb-4">What is ACoS.app?</h5>
            <p style={{ fontWeight: 400 }}>
              ACoS.app is a powerful web application designed specifically to{" "}
              <b>optimize bids</b> for Amazon's Pay-Per-Click (PPC) advertising
              campaigns. With its user-friendly interface and advanced
              algorithms, ACoS.app empowers Amazon sellers to{" "}
              <b>reduce wasted ad spend </b> and <b>lower ACoS</b> (Advertising
              Cost of Sale).
            </p>
          </div>
        </div>
        <div className="row mt-4 pt-4">
          <div className="col-6">
            <h5 className="pb-4">How Does it Work?</h5>
            <p className="pb-4 mb-4" style={{ fontWeight: 400 }}>
              Using a robust bid management system, ACoS.app analyzes historical
              campaign data from <b>Bulk Files</b> to identify underperforming
              keywords and targets and make the appropriate bid adjustments.
              ACoS.app offers the easiest and most streamlined solution for
              making bid adjustments in bulk,{" "}
              <b>saving you valuable time and effort</b> and reducing the chance
              of errors.
            </p>
            <p className="mt-4 pt-4">
              <b>
                For a detailed How-to Guide, please click <Link>here</Link>{" "}
              </b>{" "}
            </p>
          </div>
          <div className="col-6">
            <ul className="list-unstyled custom-list">
              <li>
                <div className="circle circle1">1</div>
                <div className="content" style={{ fontWeight: 400 }}>
                  <p className="text-1 text-primary">
                    <b>DOWNLOAD YOUR BULK FILES</b>
                  </p>
                  From your Amazon Ad Console go to the Bulk Operations Portal
                  to generate and download your Bulk Files
                </div>
              </li>
              <li>
                <div className="circle circle2">2</div>
                <div className="content" style={{ fontWeight: 400 }}>
                  <p className="text-dark">
                    <b>UPLOAD BULK FILES TO ACoS.app</b>
                  </p>
                  Upload your Bulk Files to ACos.app and watch the magic happen
                  - with a few simple clicks your bids are optimized.
                </div>
              </li>
              <li>
                <div className="circle circle3">3</div>
                <div className="content" style={{ fontWeight: 400 }}>
                  <p className="text-3">
                    <b>DOWNLOAD & UPLOAD TO AMAZON</b>
                  </p>
                  Once the bid adjustments are successfully applied, download
                  the modified Bulk File from ACoS.app, go to the Bulk
                  Operations Portal and upload the Bulk File.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
