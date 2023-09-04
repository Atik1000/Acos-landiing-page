import React from "react";
import "../style/landingpage/policy.css";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="container">
      <h1>Cookie Policy</h1>
      <h6>Last updated: May 12, 2023</h6>
      <p>
        This Cookie Policy explains how ACoS.app ("we" or "us") uses cookies and
        similar tracking technologies when you access or use our services
        (collectively, the "Services"). Please read this policy carefully to
        understand our practices regarding cookies.
      </p>
      <p>What are Cookies</p>
      <p>
        Cookies are small text files that are placed on your device (e.g.,
        computer, smartphone, or tablet) when you visit our website. They help
        us recognize your device and remember certain information about your
        preferences or actions.
      </p>
      <p>Types of Cookies We Use</p>
      <p>
        Essential Cookies: These cookies are necessary for the functioning of
        our Services. They enable basic features such as page navigation, secure
        access, and user authentication. Without these cookies, the Services may
        not work properly.
      </p>
      <p>
        Analytical/Performance Cookies: We use these cookies to collect
        anonymous information about how users interact with our Services. This
        helps us analyze website traffic, improve the performance of our
        Services, and enhance the user experience. The information collected is
        aggregated and does not personally identify you.
      </p>
      <p>
        Functionality Cookies: These cookies allow our Services to remember your
        choices and preferences (such as language selection or font size) to
        provide you with a personalized experience. They may also enable certain
        features, such as social media integration, to enhance your interaction
        with our Services.
      </p>
      <p>
        Advertising/Targeting Cookies: We may use these cookies to deliver
        relevant advertisements to you based on your interests. They track your
        browsing habits and enable us to tailor the advertising content
        displayed on our website or third-party platforms. These cookies are
        typically placed by advertising networks or social media platforms with
        our permission.
      </p>
      <p>Third-Party Cookies</p>
      <p>
        We may allow third-party service providers, such as analytics or
        advertising companies, to place cookies on our website. These cookies
        are subject to the respective third parties' privacy policies and are
        not controlled by us. We recommend reviewing the privacy policies of
        these third parties for more information on their cookie practices.
      </p>
      <p>Your Cookie Choices</p>
      <p>
        You have the option to manage or disable cookies through your browser
        settings. However, please note that blocking certain types of cookies
        may impact the functionality and performance of our Services.
      </p>
      <p>
        By continuing to use our Services, you consent to the placement of
        cookies on your device in accordance with this Cookie Policy.
      </p>
      <p>Changes to this Cookie Policy</p>
      <p>
        We reserve the right to update or modify this Cookie Policy at any time.
        If we make material changes, we will notify you by email or through a
        notice on our website. Your continued use of the Services after any
        changes signifies your acceptance of the updated Cookie Policy.
      </p>
      <p>Contact Us</p>
      <p>
        If you have any questions, concerns, or requests regarding this Data
        Retention Policy or our data retention practices, please contact us at
        <Link>info@acos.app</Link>.
      </p>
      <p>
        By using our Services, you acknowledge and agree to the data retention
        practices outlined in this Data Retention Policy.
      </p>
    </div>
  );
};

export default CookiePolicy;
