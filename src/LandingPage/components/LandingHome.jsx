import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../container/Home";
import HowWork from "../container/HowWork";
import FAQ from "../container/Faq";
import Pricing from "../container/Pricing";
import UploadBulk from "../container/UploadBulk";
import "../style/landingpage/Landinghome.css";

const LandingHome = () => {
  return (
    <div>
      <Header/>
      <Home />
      <HowWork />
      <FAQ />
      <Pricing />
      <UploadBulk />
      <Footer />
    </div>
  );
};

export default LandingHome;
