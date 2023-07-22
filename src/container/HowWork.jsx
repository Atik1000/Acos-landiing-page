
import React from 'react';
import '../style/howwork.css';

const HowWork = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                <div className="col-6 col-md-4">
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
                     </div>
            </div>
            
        </div>
    );
};

export default HowWork;
