import '../style/landingpage/uploadbulk.css';

import React, { useState } from 'react';

import { FileUploader } from 'react-drag-drop-files';
import { Link } from 'react-router-dom';

const fileTypes = ['JSON', 'Xlsx', 'csv', 'Pdf'];

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
                        <div className="card shadow-sm rounded p-3 upload-card">
                            <div className="p-10 bg-white">
                                <p className="card h5 text-center d-flex">
                                    Upload Bulk File 1 Yesterday
                                </p>
                                <div>
                                    <FileUploader
                                        className="dndStyle"
                                        onChange={handleChange}
                                        name="file"
                                        types={fileTypes}></FileUploader>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm rounded p-3 upload-card">
                            <div className="p-10 bg-white">
                                <p className="card h5 text-center d-flex">
                                    Upload Bulk File 2 60 days
                                </p>
                                <div>
                                    {/* Move the title here */}
                                    <FileUploader
                                        className="dndStyle"
                                        onChange={handleChange}
                                        name="file"
                                        types={fileTypes}></FileUploader>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">
                        File Ready To Download
                    </button>
                </div>
            </div>

            <div
                className="d-flex justify-content-center mt-4 pt-4 mb-6 pb-6"
                style={{ marginBottom: '100px' }}>
                <Link to="sign-up" type="button" className="btn btn-primary start-btn">
                    FILE READY TO DOWNLOAD
                </Link>
            </div>

            {/* <button className="btn btn-main">FILE READY TO DOWNLOAD</button> */}
        </div>
    );
};

export default UploadBulk;
