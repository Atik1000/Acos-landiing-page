import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/landingpage/uploadbulk.css";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JSON", "Xlsx", "csv", "Pdf"];

const UploadBulk = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Your code to handle the file upload goes here
    console.log(selectedFile);
  };

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
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
          <Link className="mb-6 pb-4">How-to guide</Link>
        </h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="p-10 bg-white">
              <div className="card">Upload Bulk File 1 Yesterday</div>
              <div>
                <FileUploader
                  className="dndStyle"
                  onChange={handleChange}
                  name="file"
                  types={fileTypes}
                ></FileUploader>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-10 bg-white">
              <div className="card">Upload Bulk File 2 60 days</div>
              <div>
                <FileUploader
                  className="dndStyle"
                  onChange={handleChange}
                  name="file"
                  types={fileTypes}
                ></FileUploader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBulk;
