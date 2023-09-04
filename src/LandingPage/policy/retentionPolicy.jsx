import React from "react";
import "../style/landingpage/policy.css";
import { Link } from "react-router-dom";

const RetentionPolicy = () => {
  return (
    <div className="container">
      <h1>Data Retention Policy</h1>
      <h6>Last updated: May 12, 2023</h6>
      <p>
        At ACoS.app, we believe in maintaining data accuracy, security, and
        confidentiality. This Data Retention Policy outlines how we handle the
        retention and storage of your personal information when you access or
        use our services (collectively, the "Services"). Please read this policy
        carefully to understand our practices regarding data retention.
      </p>
      <p>Retention of Personal Information</p>
      <p>
        We retain your personal information for as long as necessary to fulfill
        the purposes for which it was collected, including providing you with
        the requested Services, complying with legal obligations, resolving
        disputes, and enforcing our agreements. The specific retention period
        may vary depending on the type of information and the applicable legal
        requirements.
      </p>
      <p>Data Security</p>
      <p>
        We take reasonable measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. We employ
        industry-standard security practices and technologies to safeguard your
        data. However, please be aware that no method of transmission or storage
        is completely secure, and we cannot guarantee absolute data security.
      </p>
      <p>Data Backup and Storage</p>
      <p>
        We regularly back up your personal information to ensure its
        availability and integrity. These backups are securely stored and
        encrypted to prevent unauthorized access. In the event of a data loss
        incident, we will restore the data from the most recent backup
        available.
      </p>
      <p>Data Deletion</p>
      <p>
        Upon request or when your personal information is no longer necessary
        for the purposes for which it was collected, we will securely delete or
        anonymize your data, unless we are required by law to retain it for a
        longer period. Please note that certain residual copies of your data may
        remain in our backup systems for a limited period.
      </p>
      <p>Third-Party Data Processors</p>
      <p>
        We may engage third-party service providers to assist us in processing
        and storing your personal information. These providers are contractually
        bound to comply with data protection obligations and are prohibited from
        using your information for any other purpose than what is specified in
        our agreement with them.
      </p>
      <p>User Control and Rights</p>
      <p>
        You have the right to access, correct, or delete your personal
        information that we hold. If you would like to exercise these rights or
        have any concerns about the retention of your data, please contact us
        using the information provided below in the "Contact Us" section.
      </p>
      <p>Cross-Border Data Transfers</p>
      <p>
        If you access or use our Services from a location outside the
        jurisdiction where your personal information is stored, your information
        may be transferred to, stored, and processed in a jurisdiction that may
        have different data protection laws. By using our Services, you consent
        to the transfer of your information to these jurisdictions.
      </p>
      <p>Changes to this Data Retention Policy</p>
      <p>
        We reserve the right to update or modify this Data Retention Policy at
        any time. If we make material changes, we will notify you by email or
        through a notice on our website. Your continued use of the Services
        after any changes signifies your acceptance of the updated Data
        Retention Policy.
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

export default RetentionPolicy;
