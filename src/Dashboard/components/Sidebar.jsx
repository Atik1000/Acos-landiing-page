import '../Style/sidebar.css';
import 'react-toggle/style.css';

import React, { useState } from 'react'; // Import the useState hook
import { faCog, faUserShield, faWallet } from '@fortawesome/free-solid-svg-icons';

import ApexChart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ProgressChart from './Progressbar';

const Sidebar = () => {
    const [isFirstToggleOn, setIsFirstToggleOn] = useState(false);
    const [isSecondToggleOn, setIsSecondToggleOn] = useState(false);

    const handleFirstToggle = () => {
        setIsFirstToggleOn(!isFirstToggleOn);
    };

    const handleSecondToggle = () => {
        setIsSecondToggleOn(!isSecondToggleOn);
    };

    return (
        <div>
            <div className="sidebar-container mt-2 rounded">
                <div className="row">
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faUserShield}
                            className="help-icon mt-2 ml-3 "
                            color="gray"
                            fontSize="35"
                        />
                    </div>
                    <div className="col-md-9 pl-0">
                        <span className="text-lg how-to-guide-admin">How-to guide</span>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faCog}
                            className="help-icon mt-2 ml-3 "
                            color="gray"
                            fontSize="35"
                        />
                    </div>
                    <div className="col-md-9 pl-0">
                        <span className="text-lg how-to-guide-admin">Settings</span>
                        <div className="mt-3">
                            <div className="">
                                <label className={`switch ${isFirstToggleOn ? 'red' : 'blue'}`}>
                                    <input
                                        type="checkbox"
                                        checked={isFirstToggleOn}
                                        onChange={handleFirstToggle}
                                    />
                                    <span
                                        className={`slider ${
                                            isFirstToggleOn ? 'red' : 'blue'
                                        }`}></span>
                                </label>
                                <span className="ml-2 mode"> Simple mode </span>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="">
                                <label className={`switch ${isSecondToggleOn ? 'blue' : 'red'}`}>
                                    <input
                                        type="checkbox"
                                        checked={isSecondToggleOn}
                                        onChange={handleSecondToggle}
                                    />
                                    <span
                                        className={`slider ${
                                            isSecondToggleOn ? 'blue' : 'red'
                                        }`}></span>
                                </label>
                                <span className="ml-2 mode"> Advanced Mode </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-3">
                        <FontAwesomeIcon
                            icon={faWallet}
                            className="help-icon mt-2 ml-3 "
                            color="gray"
                            fontSize="35"
                        />
                    </div>
                    <div className="col-md-9 pl-0 ">
                        <Link to="logs" className="logs">
                            <span className="text-lg how-to-guide-admin">Logs</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sidebar-container mt-2 rounded">
                <div className="row mt-2">
                    <div className="col-md-7 p-3 mb-4">
                        <strong>Keyword & Targets Optimize</strong>
                    </div>
                    <div className="col-md-5 mt-2">
                        <div class="dropdown">
                            <button
                                class="btn btn-outline-secondary dropdown-toggle btn-drp"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Last 7 Days{' '}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Action
                                </a>
                                <a class="dropdown-item" href="#">
                                    Another action
                                </a>
                                <a class="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ApexChart />
                    </div>
                    <div className="col-md-6">
                        <ProgressChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
