import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./LandingPage/components/Layout";
import Contact from "./LandingPage/container/Contact";
import FAQ from "./LandingPage/container/Faq";
import HowWork from "./LandingPage/container/HowWork";
import Pricing from "./LandingPage/container/Pricing";
import SignUp from "./LandingPage/container/SignUp";
import UploadBulk from "./LandingPage/container/UploadBulk";
import LandingHome from "./LandingPage/components/LandingHome";
// Dashboard
import Dashboard from "./Dashboard/index";
import Logs from "./Dashboard/container/Logs";
// Not Found
import NotFound from "./LandingPage/container/notfound";
// Policy
import HowToguide from "./LandingPage/policy/HowToguide";
import PrivacyPoliicy from "./LandingPage/policy/PrivacyPoliicy";
import OrderCancell from "./LandingPage/policy/OrderCancell";
import CookiePolicy from "./LandingPage/policy/CookiePolicy";
import RetentionPolicy from "./LandingPage/policy/retentionPolicy";
// Guide
import Guide from "./LandingPage/HowGuide/Guide";
import ModesAndTemplates from "./LandingPage/HowGuide/ModesAndTemplates";
import Rule from "./LandingPage/HowGuide/Rule";

const App = () => {
  return (
    <>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route
          path="/how-its-work"
          element={
            <Layout>
              <HowWork />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/upload-file"
          element={
            <Layout>
              <UploadBulk />
            </Layout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/guide-policy"
          element={
            <Layout>
              <HowToguide />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPoliicy />
            </Layout>
          }
        />
        <Route
          path="/order-cancellation"
          element={
            <Layout>
              <OrderCancell />
            </Layout>
          }
        />
        <Route
          path="/cookie-policy"
          element={
            <Layout>
              <CookiePolicy />
            </Layout>
          }
        />
        <Route
          path="/retentional-policy"
          element={
            <Layout>
              <RetentionPolicy />
            </Layout>
          }
        />
        <Route
          path="/guide"
          element={
            <Layout>
              <Guide />
            </Layout>
          }
        />
        <Route
          path="/module-and-templates"
          element={
            <Layout>
              <ModesAndTemplates />
            </Layout>
          }
        />
        <Route
          path="/rule"
          element={
            <Layout>
              <Rule />
            </Layout>
          }
        />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="dashbord/logs" element={<Logs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </Layout> */}
    </>
  );
};

export default App;