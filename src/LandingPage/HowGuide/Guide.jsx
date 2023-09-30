import React from "react";
import file1 from "../icon/file-1.png";
import file2 from "../icon/file-2.png";
import file3 from "../icon/file-3.png";
import file4 from "../icon/file-4.png";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="container">
      <h1>How-to guide</h1>
      <h6>Create Bulk File 1 - "Yesterday"</h6>
      <img src={file1} alt="file1" />
      <h6 className="mt-4 pt-4">Create Bulk File 2 - "60 Days"</h6>
      <img src={file2} alt="file2" />
      <h6 className="mt-4 pt-4">Download both files and Upload to ACoS.app</h6>
      <img src={file3} alt="file3" />
      <h6 className="mt-4 pt-4">
        Download your optimized Bulk File from ACoS.app and Upload{" "}
      </h6>
      <img src={file4} alt="file4" />
      <div className="mt-4 pt-4 mb-4 pb-4">
        {" "}
        <Link to="/sign-up" style={{ color: "#108ACC", marginTop: "15px" }}>
          Start optimizing
        </Link>
      </div>
    </div>
  );
};

export default Guide;
