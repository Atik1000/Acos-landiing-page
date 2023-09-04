import React from "react";
import "../style/landingpage/policy.css";
import { Link } from "react-router-dom";

const OrderCancell = () => {
  return (
    <div className="container">
      <h1>
        Order Cancellation <br /> and Refund Policy
      </h1>
      <h6>Last updated: May 18, 2023</h6>
      <p>
        This Order Cancellation and Refund Policy outlines the terms and
        conditions regarding the cancellation of orders placed through ACoS.app
        ("we" or "us") and refunds. Please review this policy carefully to
        understand our practices concerning order cancellations and refunds.
      </p>
      <p>Cancellation by Customer</p>
      <p>
        If you wish to cancel an order, please reach out to our customer support
        team as soon as possible. We will make every effort to accommodate your
        request, subject to the following conditions:
      </p>
      <p>
        Refund Eligibility: If the cancellation request is received within the
        specified time frame and any credits associated with the order have not
        been used, you may be eligible for a refund. The refund will be issued
        using the original payment method used for the order unless otherwise
        agreed upon. Please note that if any credits associated with the order
        have already been used, they are not subject to refund. However, if the
        credits have not been used, they are refundable in accordance with our
        refund policy.
      </p>
      <p>Cancellation by Us</p>
      <p>
        We reserve the right to cancel an order under certain circumstances,
        including but not limited to:
      </p>
      <p>
        Unavailability of Product or Service: If the ordered product or service
        becomes unavailable or cannot be provided for any reason, we may cancel
        the order. In such cases, we will promptly notify you and provide a full
        refund, including any unused credits.
      </p>
      <p>
        Pricing or Description Errors: In the event of a pricing or description
        error on our website, we may cancel the order. In such cases, we will
        offer you the option to place a new order with the corrected information
        or provide a refund, including any unused credits.
      </p>
      <p>
        Fraudulent Activity: If we suspect any fraudulent activity or violation
        of our terms and conditions, we reserve the right to cancel the order
        and take appropriate legal action. In such cases, any unused credits may
        be subject to forfeiture.
      </p>
      <p>Changes to Orders</p>
      <p>
        While we understand that you may need to modify your order after it has
        been placed, we cannot guarantee order modifications once the order has
        been submitted. If you need to make any changes to your order, we
        recommend contacting our customer support team immediately.
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

export default OrderCancell;
