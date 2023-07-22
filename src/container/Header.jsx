import React from 'react';
import '../style/Header.css';
import Acos from '../icon/ACoS-03.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src={Acos} alt="" />
                    </a>

                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">How It Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Sign In</Link>
                        </li>
                    </ul>
                  
                </div>
            </nav>
        </div>
    );
};

export default Header;