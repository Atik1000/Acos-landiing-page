import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/landingpage/uploadbulk.css";

const UploadBulk = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Your code to handle the file upload goes here
    console.log(selectedFile);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1 className="pb-4 mb-4">
          Upload your bulk files now
          <br />
          and start optimizing for free
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <h2>
          <Link className="mb-4 pb-4">How-to guide</Link>
        </h2>
      </div>

      <div className="row">
        <div className="col">
          <div className="card">Upload Bulk File 1 Yesterday</div>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handleFileChange}
          />
        </div>
        <div className="col">
          <div className="card">Upload Bulk File 2 60 Days</div>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadBulk;
