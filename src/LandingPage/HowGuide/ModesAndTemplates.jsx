import React from "react";
import { Link } from "react-router-dom";

const ModesAndTemplates = () => {
  return (
    <div className="container">
      <h1>Modes and Templates</h1>
      <div className="row">
        <div className="col-md-4">
          <h6>Simple Mode</h6>
          <p>
            In Simple Mode, which is our recommended option for most users,
            there are three fine-tuned and ready-to-use templates.
          </p>
          <ul>
            <li style={{ listStyle: "disc", fontSize: "22px" }}>Moderate</li>
            <li style={{ listStyle: "disc", fontSize: "22px" }}>Balanced</li>
            <li style={{ listStyle: "disc", fontSize: "22px" }}>Dynamic</li>
          </ul>
          <p>
            These templates have proven to be effective, consistently delivering
            outstanding results.
          </p>
          <div style={{ marginTop: "10px" }}>
            {" "}
            <Link style={{ color: "#108ACC" }}>go to Simple Mode</Link>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <h6>Advanced Mode</h6>
          <p>
            In Advanced Mode, you have the flexibility to build your own
            templates from scratch. As a starting point, we provide the same
            three templates available in Simple Mode. These templates serve as a
            foundation that you can modify and fine-tune according to your
            specific bidding strategy
          </p>
          <div style={{ marginTop: "120px" }}>
            <Link style={{ color: "#108ACC" }}>go to Advanced Mode</Link>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <h1 className="text-center mt-4 pt-4">Templates</h1>
      </div>

      <div className="row">
        <div className="col-md-2">
          <h3>Moderate</h3>
          <Link style={{ color: "#108ACC" }}>
            Load <br /> template
          </Link>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <p>
            {" "}
            The Moderate template is a proven option for users who prefer a more
            cautious approach to bid adjustments. This template focuses on
            maintaining stability and control by implementing bid rules that are
            set at a conservative level, well above your break-even ACoS to
            avoid aggressive bid adjustments. By utilizing this template, it is
            advised to make bid adjustments more frequently on a daily basis.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <h3>Balanced</h3>
          <Link style={{ color: "#108ACC" }}>
            Load <br /> template
          </Link>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <p>
            With the Balanced template, bid rules are set at a balanced level,
            enabling you to maintain a healthy balance between maximizing
            visibility and managing costs. This template allows you to achieve a
            more cost-efficient ACoS while maintaining a reasonable level of
            exposure and safeguarding profitability. For optimal results, it is
            recommended to make bid adjustments either on a daily basis or 3-4
            times a week when utilizing this template.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <h3>Dynamic</h3>
          <Link style={{ color: "#108ACC" }}>
            Load <br /> template
          </Link>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <p>
            The Dynamic template is specifically designed to expedite the
            reduction of bids, ultimately leading to a lower ACoS and
            accelerated decrease in ad spend. The bid rules are set to
            prioritize rapid cost reduction without compromising performance. By
            utilizing this template, you can effectively lower ACoS, and
            minimize ad spend at a faster pace to align with your budgetary
            goals. If you choose to utilize this template, it is recommended to
            make bid adjustments 2-3 times a week for optimal effectiveness.
          </p>
        </div>
        <p>
          Regardless of the template chosen, you can approach your campaigns
          with confidence. All templates will deliver results by effectively
          lowering ACoS and ad spend. While there are no strict guidelines
          regarding the frequency of template usage, by using them more
          frequently, you can take advantage of regular bid adjustments, thereby
          increasing the likelihood of lowering ACoS and ad spend.
        </p>
      </div>
    </div>
  );
};

export default ModesAndTemplates;
