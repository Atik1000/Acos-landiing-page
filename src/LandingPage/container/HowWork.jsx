
import React from 'react';

import whatisACos from '../icon/Screenshot.png';
import '../style/howwork.css';

const HowWork = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col">
                    <img src={whatisACos} alt="whatisACos" className='whatisACos' />
                </div>
                <div className="col">
                    <h5 className='pb-4'>What is ACoS.app?</h5>
                    <p>ACoS.app is a powerful web application designed specifically to <b>optimize bids</b> for Amazon's Pay-Per-Click (PPC) advertising campaigns. With its user-friendly interface and advanced algorithms, ACoS.app empowers Amazon sellers to <b>reduce wasted ad spend </b> and <b>lower ACoS</b> (Advertising Cost of Sale).</p>
                </div>

            </div>
            <div class="row mt-4 pt-4">
                <div class="col-6">
                    <h5 pb-4>How Does it Work?</h5>
                    <p>Using a robust bid management system, ACoS.app analyzes historical campaign data from Bulk Files to identify underperforming keywords and targets and make the appropriate bid adjustments. ACoS.app offers the easiest and most streamlined solution for making bid adjustments in bulk, saving you valuable time and effort and reducing the chance of errors.</p>

                </div>
                <div class="col-6">
                    <ul class="list-unstyled custom-list">
                        <li>
                            <div class="circle">1</div>
                            <div class="content">
                                <p><b>DOWNLOAD YOUR BULK FILES</b></p>
                                From your Amazon Ad Console go to the Bulk Operations Portal to generate and download your Bulk Files
                            </div>
                        </li>
                        <li>
                            <div class="circle">2</div>
                            <div class="content">
                                <p><b>UPLOAD BULK FILES TO ACoS.app</b></p>
                                Upload your Bulk Files to ACos.app and watch the magic happen - with a few simple clicks your bids are optimized.
                            </div>
                        </li>
                        <li>
                            <div class="circle">3</div>
                            <div class="content">
                                <p><b>DOWNLOAD & UPLOAD TO AMAZON</b></p>
                                Once the bid adjustments are successfully applied, download the modified Bulk File from ACoS.app, go to the Bulk Operations Portal and upload the Bulk File.
                            </div>
                        </li>
                      
                    </ul>

                  
                </div>
            </div>

        </div>
    );
};

export default HowWork;
