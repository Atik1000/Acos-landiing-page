import React from 'react';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import '../style/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container mt-4 pt-4'>
                <div className="row">
                    <div className="col-md-7">.
                        <div className="row">
                            <div className="col">
                                <ACOSICOn style={{ height: 25 }} />

                                <p><small>copyright 2023 ACoS.app</small></p>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>How-to Guide</li>
                                    <li>FAQ</li>
                                    <li>Pricing</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>Conditions of use</li>
                                    <li>Cookies</li>
                                    <li>
                                        <Link to='/contact'>
                                            Contact
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <p>Get exclusive access to new tools as they're released</p>
                        <input type="email" className="email-contact" placeholder='Email' />
                        <button type="button" className="btn btn-dark ml-4">subscribe</button>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;