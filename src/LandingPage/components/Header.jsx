import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import '../style/landingpage/Header.css';

const Header = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <Link className='navbar-brand' to='/'>
            <ACOSICOn style={{ height: 25 }} />
          </Link>

          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/how-its-work'>
                How It Works
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/pricing'>
                Pricing
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/faq'>
                FAQ
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/sign-up'>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
