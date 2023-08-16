import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/adminLayout.css";

import { faBell, faHeadphones } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as ACOSICOn } from "../../../src/LandingPage/icon/ACoS-03.svg";

import FlashImage from "../../../src/LandingPage/icon/flashlight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import avater from "../../../src/LandingPage/icon/avater.jpg";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex ml-auto">
        <Link class="navbar-brand" href="#">
          <ACOSICOn style={{ height: 50 }} />
        </Link>
        <div className="progressbar row">
          <div className="col-md-6 ">
            <strong class="font-weight-bold text-lg day-int ml-2">14</strong>
            <span class="day ml-1">days</span>
          </div>
          <div className="col-md-6 text-end">
            <strong class="font-weight-bold text-lg day-int ">5252</strong>
            <span class="day ml-1 mr-1">Keyword</span>
          </div>
          <span className="pg-bar">
            <ProgressBar
              bgColor="#1c7ed0"
              color="#1c7ed0"
              height="15px"
              hidePercentage
            />
          </span>
        </div>
        <div class="mr-2 ml-3">
          <span class="free"> free trial</span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item d-flex">
              <img
                src={FlashImage}
                alt="Flash"
                className="flash-icon ml-3"
                width={28}
              />
              <Link
                class="nav-link text-black"
                href="#"
                style={{ fontWeight: "bold !important" }}
              >
                Buy Token
              </Link>
            </li>
            <li class="nav-item d-flex">
              <FontAwesomeIcon
                style={{ fontSize: "32px" }}
                icon={faHeadphones}
                className="help-icon mt-2 ml-3 "
                color="gray"
              />
              <Link class="nav-link mr-auto" href="#">
                Help center
              </Link>
            </li>
          </ul>

          <li class="nav-item dropdown d-flex ml-auto">
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              icon={faBell}
              color="gray"
              className="notification-icon mt-2 mr-3 ml-5"
            />

            <img src={avater} alt="Flash" className="flash-icon" width={40} />
            <Link
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              First Name
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link class="dropdown-item" href="#">
                bidoptimize@gmail.com
              </Link>
              <Link class="dropdown-item" href="#">
                Refer a friend
              </Link>
              <Link class="dropdown-item" href="#">
                Logout
              </Link>
            </div>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
