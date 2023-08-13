import React, { useState } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Link } from "react-router-dom";
import "../style/landingpage/uploadbulk.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

function UploadBulk() {
  const [files, setFiles] = useState([]);

  return (
    <div className="container">
      <h1
        className="d-flex justify-content-center mb-2 pb-2"
        style={{ fontWeight: "bold", fontSize: "60px" }}
      >
        Upload your bulk files now <br /> and start optimizing for free
      </h1>
      <p
        className="d-flex justify-content-center"
        state={{ fontSize: "35px", color: "#108ACC" }}
      >
        <Link
          style={{ fontSize: "35px", fontWeight: "bold", color: "#108ACC" }}
          className="pb-4 mb-4"
        >
          How-to guide
        </Link>
      </p>
      <div className="row">
        <div className="col">
          <h4 className="text-center mb-4 pb-4">
            Upload Bulk File 1{" "}
            <span style={{ color: "#108ACC" }}>Yesterday</span>
          </h4>{" "}
        </div>
        <div className="col">
          <h4 className="text-center mb-4 pb-4">
            Upload Bulk File 2 <span style={{ color: "#108ACC" }}>60 Days</span>
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="yesterday">
            <h1 className="text-center" style={{ fontSize: "40px" }}>
              File 1
            </h1>
            <p className="text-center">Yesterday</p>
            <FontAwesomeIcon icon={faFileCirclePlus}  style={{height:'50px'}}/>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              server="/api"
              name="files"
              labelFileProcessing="Uploading..."
              allowProcess={true}
              allowRevert={true}
              allowRemove={true}
              labelIdle={
                'Drag & Drop your files here or <span class="custom-label">choose file</span>'
              }
            />
          </div>
        </div>
        <div className="col">
          <div className="yesterday">
            <h1 className="text-center" style={{ fontSize: "40px" }}>
              File 2
            </h1>
            <p className="text-center">60 days</p>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={3}
              server="/api"
              name="files"
              labelFileProcessing="Uploading..."
              allowProcess={true}
              allowRevert={true}
              allowRemove={true}
              labelIdle={
                ("Yesterdays are",
                'Drag & Drop your files or <span class="custom-label">Browse</span>')
              }
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4 pb-4 mt-4 pt-4">
        <Link className=" btn btn-primary start-btn">
          FILE READY TO DOWNLOAD
        </Link>
      </div>
    </div>
  );
}

export default UploadBulk;
