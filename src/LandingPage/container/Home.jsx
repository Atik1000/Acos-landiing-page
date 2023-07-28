import React from 'react';
import '../style/Home.css';
import LaptopIcon from '../icon/laptop.png';
import AmazonAds from '../icon/amazon-01.png';


const Home = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-4 pb-2'>Optimize your  <span className='text-primary'>Amazon PPC</span>
                <br />
                bids with a few simple clicks</h2>
            <h4 className='text-center pb-4'>Efficient Bid Management Made Simple
                <br />
                Say Goodbye to Wasted Ad Spend</h4>

            <div class="col-md-12 text-center pb-1">
                <button type="button" className="btn btn-primary start-btn">Start optimizing for free</button>
            </div>

            <p className='text-center'>No credit card required</p>
            <div className="d-flex justify-content-center">
                <img src={LaptopIcon} alt="laptop" className='laptop' />
            </div>


            <h5 className='text-center'>Trusted by <span className='text-primary'>Amazon Sellers</span>  and <span className='text-primary'>PPC Managers</span> worldwide</h5>
            <div className="d-flex justify-content-center mt-4 pt-4">
                <img src={AmazonAds} alt="amazon" className='amazon' />
            </div>
        </div>
    );
};

export default Home;