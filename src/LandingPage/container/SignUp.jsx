import React from 'react';
import { ReactComponent as ACOSICOn } from '../icon/ACoS-03.svg';
import { Link } from 'react-router-dom';
import '../style/landingpage/signup.css';
import googleIcon from '../icon/Google logo/1497553309-101_84843.png';


const SignUp = () => {
    return (
        <div className='container'>
            
            <div className="d-flex justify-content-center">
                <ACOSICOn className='icon-signup' style={{ height: 50 }} />
            </div>
            <div className="d-flex justify-content-center">
                <p className='mb-4 pb-4'>Log in or sign up to continue to ACoS.app</p>
            </div>
            <div className="d-flex justify-content-center">
                <button className='btn btn-primary mb-3 pb-3'>
                    <img src={googleIcon} alt="google-icon" className='google-icon' />
                    Continue with Google</button>
            </div>
            <div className="d-flex justify-content-center">
                <p>By signing up you agree to <Link href="">Terms and Conditions</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;