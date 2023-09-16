import React from "react";
import Faq from "react-faq-component";
import "../style/landingpage/faq.css";

const data = {
  rows: [
    {
      title: "Will it work for me?",
      content:
        "Yes! Irrespective of your level of expertise in Amazon PPC and Bulk Files, our step-by-step process and predefined bid optimization rules are specifically designed to support and guide you effortlessly.",
    },
    {
      title: "How does ACoS.app help me save time",
      content:
        "ACoS.app saves you time by using Bulk Files, eliminating the need for manual adjustments, where costly errors can occur.",
    },
    {
      title: "How does ACoS.app help me save money",
      content:
        "By identifying underperforming keywords and targets within your PPC campaigns and subsequently lowering their bids, ACoS.app helps to reduce wasted ad spend and ensure your budget is allocated more efficiently.",
    },
    {
      title: "How are unprofitable keywords and targets identified",
      content:
        "ACoS.app analyzes your PPC campaign data to evaluate the performance of keywords and targets by comparing recent results (File 1 - Yesterday's Data) with historical data(File 2 - 60 Days Data). This comparative approach enables ACoS.app to effectively identify those underperforming keywords and targets and adjust their bids accordingly, resulting in a reduction of wasted ad spend.",
    },
    {
      title: "Is it suitable for small and large-scale PPC accounts",
      content:
        "ACoS.app is designed to handle PPC accounts with campaigns and Bulk Files of all sizes.",
    },
    {
      title: "Can I customize the rules based on my goals",
      content:
        "Absolutely! ACoS.app allows you to set your own bid adjustments based on your specific advertising goals and strategies.",
    },
    {
      title: "How frequently should I use ACoS.app",
      content:
        "Depending on your advertising goals, desired level of optimization, campaign performance, and the specified pre-set rules, it is recommended to use ACoS.app on a regular basis - daily or 2-3 times a week. By treating bid optimization as an ongoing effort, you can adapt to changing market conditions, refine your advertising strategy, and continually improve the performance of your PPC campaigns."
    },
    {
      title: "Which Campaign Types are supported",
      content: "Sponsored Products, Sponsored Brands and Sponsored Display. ",
    },
    {
      title: "Which Amazon marketplaces are supported",
      content:
        "ACoS.app currently supports bid optimization for Amazon US and Amazon UK marketplaces.",
    },
    {
      title: "Is ACoS.app suitable for beginners or experts",
      content:
        "Regardless of the level of expertise in Amazon PPC, ACoS.app is designed to ensure that anyone can navigate and utilize it effectively.",
    },
  ],
};
const styles = {
  // Custom styles for each question and answer
  title: {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "lightgray",
    margin: "10px",
    paddingBottom: "30px",
    paddingRight: "30px",
    borderBottom: "none !important",
    fontWeight: "bold", // Make the question text bold
    textAlign: "left !important", // Align question text to the left
  },
  answerContainer: {
    margin: "0", // Remove margin around the answer
    paddingBottom: "0", // Remove padding at the bottom of the answer
    paddingRight: "0", // Remove padding around the answer
    borderBottom: "none !important",
    fontWeight: "400 !important", // Make the answer text normal
    textAlign: "left", // Align question text to the left
  },
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const FaqData = () => {
  const firstColumnRows = data.rows.slice(0, 5);
  const secondColumnRows = data.rows.slice(5, 10);

  return (
    <div className="container">
      <h3 className="text-center mb-4 pb-4">
        <b>Frequently Asked Questions</b>
      </h3>
      <div
        style={{ float: "left", width: "45%", textAlign: "left !important" }}
      >
        <Faq
          data={{ rows: firstColumnRows }}
          styles={styles}
          config={config}
          className="custom-faq"
        />
      </div>
      <div
        style={{ float: "left", width: "45%", textAlign: "left !important" }}
      >
        <Faq
          data={{ rows: secondColumnRows }}
          styles={styles}
          config={config}
          className="custom-faq"
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default FaqData;
