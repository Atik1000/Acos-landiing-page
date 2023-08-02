import React from 'react';
import '../Style/navbar.css';
import { ReactComponent as ACOSICOn } from '../../../src/LandingPage/icon/ACoS-03.svg';

const NavbarComponent = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">  <ACOSICOn style={{ height: 25 }} /></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><ACOSICOn style={{ height: 25 }} /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <b>14</b>days</a>
                        </li>
                  
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">free trail</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Buy Token</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Help center</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                First Name
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                
                </div>
            </nav>
        </div>
    );
};

export default NavbarComponent;
