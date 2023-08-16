import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import fileIcon from "../../LandingPage/icon/foldericon.webp";
import "../../LandingPage/style/landingpage/uploadbulk.css";
const fileTypes = ["JSON", "Xlsx", "csv", "Pdf"];

const DashbordHome = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0); // New state for upload progress

  const handleChange = (file) => {
    setFile(file);
    // Simulate upload progress (remove this line when you integrate with actual upload logic)
    simulateUploadProgress();
  };

  const simulateUploadProgress = () => {
    // Simulate upload progress from 0 to 100 in increments
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  return (
    <div className="dashboard-containr" style={{ marginLeft: "-50%" }}>
      <div className="container">
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
                            <span style={{ color: "#108ACC" }}>
                              {" "}
                              chose file
                            </span>
                          </div>
                        </div>
                      </div>
                    </FileUploader>
                    {file && (
                      <div className="progress mt-3">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${uploadProgress}%` }}
                          aria-valuenow={uploadProgress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {uploadProgress}%
                        </div>
                      </div>
                    )}
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
                            <span style={{ color: "#108ACC" }}>
                              {" "}
                              chose file
                            </span>
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
      </div>
    </div>
  );
};

export default DashbordHome;
