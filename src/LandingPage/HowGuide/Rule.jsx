import React from 'react';
import rule from "../icon/rule.png";
import { Link } from 'react-router-dom';

const Rule = () => {
    return (
      <div className="container">
        <h1>Rules Explained</h1>
        <img src={rule} alt="rule" style={{ width: "100%" }} />
        <div className="mt-4 pt-4 mb-4 pb-4">
          {" "}
          <Link style={{ color: "#108ACC", marginTop: "15px" }}>
            Start optimizing
          </Link>
        </div>
      </div>
    );
};

export default Rule;