import "../style/landingpage/uploadbulk.css";

import React, { useState } from "react";

import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
import fileIcon from "../icon/foldericon.webp";

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
        <h1 className="pb-4 mb-4" style={{ fontSize: "70px" }}>
          Upload your bulk files now
          <br />
          and start optimizing for free
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <h2>
          <Link className="mb-6 pb-4 how-to-guide">How-to guide</Link>
        </h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className=" shadow-sm rounded p-3 upload-card">
              <div className="p-10 bg-white">
                <div className="p3">
                  <div className="  text-center h2 mb-4">
                    Upload Bulk File 1{" "}
                    <span style={{ color: "#108ACC" }}>Yesterday</span>
                  </div>
                  <FileUploader
                    className="dndStyle"
                    onChange={handleChange}
                    name="file"
                    types={fileTypes}
                  >
                    <div className="fileOne row  m-2">
                      <div className="col-md-4">
                        <div className="folderIcon">
                          <img
                            src={fileIcon}
                            alt="fileIcon"
                            className="fileIcon"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 mt-2">
                        <div className="file-title">FILE1 </div>
                        <div className="file-sub">YESTERDAY </div>
                      </div>
                      <div className="col-md-12 mt-3 mb-5">
                        <div className="drag-drop mb-4">
                          Drag & drop your file here or{" "}
                          <span style={{ color: "#108ACC" }}> chose file</span>
                        </div>
                      </div>
                    </div>
                  </FileUploader>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" shadow-sm rounded p-3 upload-card">
              <div className="p-10 bg-white">
                <div className="p3">
                  <div className="  text-center h2 mb-4">
                    Upload Bulk File 2{" "}
                    <span style={{ color: "#108ACC" }}>60 Days</span>
                  </div>
                  <FileUploader
                    className="dndStyle"
                    onChange={handleChange}
                    name="file"
                    types={fileTypes}
                  >
                    <div className="fileOne row  m-2">
                      <div className="col-md-4">
                        <div className="folderIcon">
                          <img
                            src={fileIcon}
                            alt="fileIcon"
                            className="fileIcon"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 mt-2">
                        <div className="file-title">FILE 2 </div>
                        <div className="file-sub">60 DAYS </div>
                      </div>
                      <div className="col-md-12 mt-3 mb-5">
                        <div className="drag-drop mb-4">
                          Drag & drop your file here or{" "}
                          <span style={{ color: "#108ACC" }}> chose file</span>
                        </div>
                      </div>
                    </div>
                  </FileUploader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center mt-4 pt-4 mb-6 pb-6"
        style={{ marginBottom: "100px" }}
      >
        <Link to="sign-up" type="button" className="btn btn-primary start-btn">
          FILE READY TO DOWNLOAD
        </Link>
      </div>

      {/* <button className="btn btn-main">FILE READY TO DOWNLOAD</button> */}
    </div>
  );
};

export default UploadBulk;
