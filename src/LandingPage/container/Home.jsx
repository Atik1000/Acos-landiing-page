import '../style/landingpage/Home.css';

import AmazonAds from '../icon/amazon-01.png';
import LaptopIcon from '../icon/laptop.png';
import { Link } from 'react-router-dom';
import React from 'react';
import creditCard from '../icon/creditCard.webp';

const Home = () => {
    return (
        <div className="container home">
            <h2 className="text-center mt-4 pb-4">
                Optimize your <span className="text-main">Amazon PPC</span>
                <br />
                bids with a few simple clicks
            </h2>
            <h4 className="text-center pb-2">Efficient Bid Management Made Simple</h4>
            <h4 className="text-center pb-4"> Say Goodbye to Wasted Ad Spend</h4>
            <div class="col-md-12 text-center pb-1">
                <Link to="sign-up" type="button" className="btn btn-primary start-btn">
                    Start optimizing for free
                </Link>
            </div>

            <div className="text-center">
                <img src={creditCard} alt="creditCard " className="creditCard" />
                <span className="ml-2 pb-4 mb-4">No credit card required</span>
            </div>
            <div className="d-flex justify-content-center">
                <img src={LaptopIcon} alt="laptop" className="laptop" />
            </div>
            <h5 className="text-center mt-5 h4">
                Trusted by <span className="text-main">Amazon Sellers</span> and
                <span className="text-main">  PPC Managers</span> worldwide
            </h5>
            <div className="d-flex justify-content-center mt-4 pt-4">
                <img src={AmazonAds} alt="amazon" className="amazon" />
            </div>
        </div>
    );
};

export default Home;
