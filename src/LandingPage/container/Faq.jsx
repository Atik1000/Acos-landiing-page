import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Man1 from "../icon/man-1.png";
import Man2 from "../icon/man-2.png";
import "../style/landingpage/faq.css";

const FAQ = () => {
  const faqData = [
    {
      question: "Will it work for me?",
      answer:
        "Yes! Irrespective of your level of expertise in Amazon PPC and Bulk Files, our step-by-step process and predefined bid optimization rules are specifically designed to support and guide you effortlessly.",
    },
    {
      question: "How does ACoS.app help me save time",
      answer:
        "ACoS.app saves you time by using Bulk Files, eliminating the need for manual adjustments, where costly errors can occur.",
    },
    {
      question: "How does ACoS.app help me save money",
      answer:
        "By identifying underperforming keywords and targets within your PPC campaigns and subsequently lowering their bids, ACoS.app helps to reduce wasted ad spend and ensure your budget is allocated more efficiently.",
    },
    {
      question: "How are unprofitable keywords and targets idenfied",
      answer:
        "ACoS.app analyzes your PPC campaign data to evaluate the performance of keywords and targets by comparing recent results (File 1 - Yesterday's Data) with historical data(File 2 - 60 Days Data).This comparative approach enables ACoS.app to effectively identify those underperforming keywords and targets and adjust their bids accordingly, resulting in a reduction of wasted ad spend",
    },
    {
      question: "Is it suitable for small and large-scale PPC accounts",
      answer:
        "ACoS.app is designed to handle PPC accounts with campaigns and Bulk Files of all sizes",
    },
    {
      question: "How does ACoS.app help me save money",
      answer:
        "By identifying underperforming keywords and targets within your PPC campaigns and subsequently lowering their bids, ACoS.app helps to reduce wasted ad spend and ensure your budget is allocated more efficiently.",
    },
    {
      question: "How are unprofitable keywords and targets idenfied",
      answer:
        "ACoS.app analyzes your PPC campaign data to evaluate the performance of keywords and targets by comparing recent results (File 1 - Yesterday's Data) with historical data(File 2 - 60 Days Data).This comparative approach enables ACoS.app to effectively identify those underperforming keywords and targets and adjust their bids accordingly, resulting in a reduction of wasted ad spend",
    },
    {
      question: "Is it suitable for small and large-scale PPC accounts",
      answer:
        "ACoS.app is designed to handle PPC accounts with campaigns and Bulk Files of all sizes",
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(
    Array(faqData.length).fill(true)
  );

  const toggleCollapse = (index) => {
    const updatedCollapseStatus = [...isCollapsed];
    updatedCollapseStatus[index] = !updatedCollapseStatus[index];
    setIsCollapsed(updatedCollapseStatus);
    console.log("clicked collapse");
  };

  return (
    <div className="container faq">
      <h3 className="text-center mb-4">
        <b>Frequently Asked Questions</b>
      </h3>
      <div className="row">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            width: "100%",
            gap: 15,
          }}
        >
          {faqData.map((item, index) => (
            <div
              className="card"
              key={index}
              data-toggle="collapse"
              data-target={`#collapse${index}`}
              aria-expanded={!isCollapsed[index]}
              aria-controls={`collapse${index}`}
            >
              <div className="card-header" id={`heading${index}`}>
                <h5 className="mb-0">
                  <p className="btn mb-0" onClick={() => toggleCollapse(index)}>
                    {item.question}
                  </p>
                </h5>
                <FontAwesomeIcon icon={isCollapsed[index] ? faPlus : faMinus} />
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${isCollapsed[index] ? "" : "show"}`}
                aria-labelledby={`heading${index}`}
                data-parent=".faq" // Update the data-parent attribute to target the .faq parent element
              >
                <div className="card-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-center mb-4 mt-4 pt-4">
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
                  wasted ad spend, ultimately lowering my ACOS. It's a simple, but brilliant tool.
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
            <div className="box">
              <h4>
                <b>A must-have for any Amazon seller</b>
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
  );
};

export default FAQ;
