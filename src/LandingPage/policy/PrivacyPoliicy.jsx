import React from 'react';
import "../style/landingpage/policy.css";
import { Link } from "react-router-dom";

const PrivacyPoliicy = () => {
    return (
      <div className="container">
        <h1>Privacy Policy</h1>
        <h6>Last updated: May 5, 2023</h6>
        <p>
          At ACoS.app, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and retain your
          personal information when you access or use our services
          (collectively, the "Services"). Please read this policy carefully to
          understand our practices regarding your personal information.
        </p>
        <p>Data Collection and Use</p>
        <p>
          We may collect personal information from you when you voluntarily
          provide it to us or when you use our Services. This may include
          information such as your name, email address, contact information, and
          other details necessary to provide you with the requested Services. We
          use this information to deliver, maintain, and improve our Services,
          as well as to communicate with you.
        </p>
        <p>Data Retention</p>
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes for which it was collected, as required by law,
          or as otherwise stated in this Privacy Policy. We take reasonable
          steps to ensure that the personal information we collect is accurate,
          complete, and up-to-date.
        </p>
        <p>Data Security</p>
        <p>
          We have implemented appropriate technical and organizational measures
          to protect your personal information from unauthorized access,
          disclosure, alteration, and destruction. However, please note that no
          method of transmission or storage can guarantee absolute security. We
          cannot guarantee the security of your personal information transmitted
          to our Services; any transmission is at your own risk.
        </p>
        <p>Third-Party Service Providers</p>
        <p>
          We may engage third-party service providers to perform functions on
          our behalf, such as hosting, data analysis, customer support, and
          marketing assistance. These service providers may have access to your
          personal information only to the extent necessary to perform their
          functions and are obligated to maintain the confidentiality and
          security of your information.
        </p>
        <p>Cookies and Similar Technologies</p>
        <p>
          Our Services may use cookies and similar technologies to enhance your
          browsing experience and provide personalized content. These
          technologies collect certain information automatically, such as your
          IP address, browser type, operating system, and browsing behavior. You
          can manage your cookie preferences through your browser settings.
        </p>
        <p>Disclosure of Information</p>
        <p>
          We may disclose your personal information to comply with legal
          obligations, enforce our policies, respond to claims or protect the
          rights, property, or safety of ourselves or others. We may also
          disclose aggregated and anonymized information that does not identify
          you personally for various purposes, including analytics and
          marketing.
        </p>
        <p>Third-Party Links</p>
        <p>
          Our Services may contain links to third-party websites or services
          that are not owned or controlled by us. We are not responsible for the
          privacy practices or content of these third-party sites. We encourage
          you to review the privacy policies of those third parties before
          providing any personal information.
        </p>
        <p>Changes to this Privacy Policy</p>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. If we make material changes, we will notify you by email or
          through a notice on our website. Your continued use of the Services
          after any changes signifies your acceptance of the updated Privacy
          Policy.
        </p>
        <p>Contact Us</p>
        <p>
          If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at
                
          <Link>info@acos.app</Link>.
        </p>
        <p>
          By using our Services, you consent to the collection, use, disclosure,
          and retention of your personal information as described in this
          Privacy Policy.
        </p>
      </div>
    );
};

export default PrivacyPoliicy;