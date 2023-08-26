import React from "react";
import '../style/landingpage/policy.css';
import { Link } from "react-router-dom";

const HowToguide = () => {
  return (
    <div className="container">
      <h1>Conditions of Use</h1>
      <h6>Last updated: April 16, 2023</h6>
      <p>
        Welcome to ACoS.app. By accessing or using our services (collectively,
        the "Services"), you agree to comply with the following <br />{" "}
        conditions. Please read them carefully.
      </p>
      <p>Privacy and Data Retention</p>
      <p>
        Your use of the Services is also subject to our{" "}
        <Link>Privacy Policy</Link> , which explains how we collect, use, and
        protect your personal information. By using our Services, you consent to
        the collection, processing, and retention of your data as described in
        our Privacy Policy and <Link>Data Retention Policy</Link>.
      </p>
      <p>Data Security</p>
      <p>
        We take the security of your data seriously and implement reasonable
        measures to protect it. However, please be aware that no method of
        transmission or storage can guarantee absolute security. You are
        responsible for taking appropriate precautions to protect your personal
        information when using our Services.
      </p>
      <p>Cookie Policy</p>
      <p>
        Our Services may use cookies and similar technologies to enhance your
        browsing experience and personalize content. By using our Services, you
        consent to the use of cookies in accordance with our{" "}
        <Link>Cookie Policy</Link>. You can manage your cookie preferences
        through your browser settings.
      </p>
      <p>Order Cancellation and Refund Policy</p>
      <p>
        If you wish to cancel an order, please contact our customer support team
        as soon as possible. We will make every effort to accommodate your
        request, adhering to the{" "}
        <Link>Order Cancellation and Refund Policy</Link>.
      </p>
      <p>Electronic Communications</p>
      <p>
        When you use our Services, you consent to receive communications from us
        electronically. These may include emails, texts, or notices on the
        website. You agree that all such communications satisfy any legal
        requirement for written communication.
      </p>
      <p>Copyright</p>
      <p>
        All content provided through our Services is protected by copyright
        laws. You may not use, reproduce, or distribute any content without our
        express written consent.
      </p>
      <p>Trademarks</p>
      <p>
        The trademarks and trade dress used in our Services are the property of
        ACoS.app. They may not be used in connection with any product or service
        without our consent.
      </p>
      <p>License and Access</p>
      <p>
        Subject to your compliance with these conditions and any additional
        terms, we grant you a limited, non-exclusive, non-transferable license
        to access and use our Services for personal, non-commercial purposes.
      </p>
      <p>Your Account</p>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and agree to accept responsibility for all activities that occur under
        your account. We reserve the right to refuse service, terminate
        accounts, or cancel orders at our discretion.
      </p>
      <p>User-Generated Content</p>
      <p>
        You may post content through our Services, subject to certain
        restrictions. By doing so, you grant us a nonexclusive, royalty-free
        license to use, reproduce, and display such content.
      </p>
      <p>Disclaimer of Warranties and Limitation of Liability</p>
      <p>
        Our Service provides tools and resources to assist with Amazon PPC
        advertising. However, we cannot guarantee specific results or outcomes
        from using our Services. The success of your PPC campaigns may vary
        based on various factors, including market conditions, competition,
        product quality, and your own strategies and efforts. While we strive to
        provide accurate and helpful information, the ultimate responsibility
        for the performance and results of your Amazon PPC campaigns rests with
        you as the user. Our Service does not assume any liability for the
        outcomes or consequences of using our platform or following any guidance
        provided. It is important to understand that results in PPC advertising
        can differ for each user, and individual experiences may vary.
      </p>
      <p>Site Policies, Modification, and Severability</p>
      <p>
        Please review our other policies posted on our website. We reserve the
        right to make changes to our site, policies, and these conditions at any
        time. If any condition is deemed invalid or unenforceable, it will not
        affect the validity of the remaining conditions.
      </p>
      <p>Contact Us</p>
      <p>
        If you have any questions, concerns, or requests regarding the
        Conditions of Use, please contact us at <Link>info@acos.app</Link>.
      </p>
      <p>
        By using our Services, you acknowledge and agree to comply with the
        Conditions of Use.
      </p>
    </div>
  );
};

export default HowToguide;
