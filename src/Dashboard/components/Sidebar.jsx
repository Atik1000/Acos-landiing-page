import '../Style/sidebar.css';
import 'react-toggle/style.css';

import React, { useState } from 'react'; // Import the useState hook
import { faCog, faUserShield, faWallet } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Toggle from 'react-toggle';

const Sidebar = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };
    return (
        <div className="sidebar-container mt-2 rounded">
            <div className="row">
                <div className="col-md-3">
                    <FontAwesomeIcon
                        icon={faUserShield}
                        className="help-icon mt-2 ml-3 "
                        color="gray"
                        fontSize="25"
                    />
                </div>
                <div className="col-md-9 pl-0">
                    <span className="text-lg how-to-guide">How-to guide</span>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">
                    <FontAwesomeIcon
                        icon={faCog}
                        className="help-icon mt-2 ml-3 "
                        color="gray"
                        fontSize="25"
                    />
                </div>
                <div className="col-md-9 pl-0">
                    <span className="text-lg how-to-guide">Settings</span>
                    <div className="mt-3">
                        <div className="">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isToggleOn}
                                    onChange={handleToggle}
                                />
                                <span className="slider "></span>
                            </label>
                            <span className="ml-2 mode"> Simple mode </span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isToggleOn}
                                    onChange={handleToggle}
                                />
                                <span className="slider "></span>
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
                        fontSize="25"
                    />
                </div>
                <div className="col-md-9 pl-0">
                    <span className="text-lg how-to-guide">Log</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
