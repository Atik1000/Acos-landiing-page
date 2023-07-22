import React from 'react';
import '../style/tryitfree.css'

const TryItFree = () => {
    return (
        <div className='container'>
            <h2 className='text-center mb-2'>Try it free</h2>
            <p className='text-center no-credit'>No Credit Card Required
                <br />
                No Monthly Fees
            </p>
            <div className='subscription-plan-area'>
                <h2 class="text-center subscription">
                    $0.01
                </h2>
                <hr />

                <p className='text-center target'>per Keyword or Target</p>
                <div className='col d-flex justify-content-center mb-4'>
                    <button class="btn btn-primary start-btn">Start with 1000 free tokens</button>
                </div>
                <p className='text-center target'>Good to Optimize 1000 Keywords or Targets</p>
            </div>

            <div className='col d-flex justify-content-center'>
                <div class="card">



                    <ul className='card-header subscribtion-item'>
                        <li>Optimize your bids for a fraction of what you'll save in ad spend</li>
                        <li>Utilize your tokens whenever needed</li>
                        <li>No hidden charges, tiers and features</li>
                        <li>More tokens can be purchased at any time</li>

                    </ul>
                    <p className='text-center mt-4  pt-4'>Bid optimization service that pays for itself</p>
                </div>
            </div>


        </div>
    );
};

export default TryItFree;