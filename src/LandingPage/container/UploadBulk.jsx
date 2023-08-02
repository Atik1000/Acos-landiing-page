import React from 'react';
import { Link } from 'react-router-dom';
import '../style/landingpage/uploadbulk.css';

const UploadBulk = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
                <h1 className='pb-4 mb-4'>Upload your bulk files now
                    <br />
                    and start optimizing for free</h1>
                
            </div>

            <div className='d-flex justify-content-center'>
                <Link className='mb-4 pb-4'>How-to guide</Link>
            </div>
           
                <div className="row">
                  
                    <div className="col">
                        
                        <div className="card">
                            Upload Bulk File 1 Yesterday
                        </div>
                        </div>
                    <div className="col">Upload Bulk File 2 60 Days</div>
                   
      
            </div>
        </div>
    );
};

export default UploadBulk;