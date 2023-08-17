import React from "react";
import NavbarComponent from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../Style/logs.css";

const Logs = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Link to="/dashbord" style={{ textDecoration: "none", color: "gray" }}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="mr-3"
            style={{ color: "gray" }}
          />
          Back
        </Link>
        <ul className="dual-list">
          <li className="left">Log</li>
          <li className="right">Last 10</li>
        </ul>
        <table class="table table-bordered">
          <thead className="table-header">
            <tr>
              <th scope="col" className="custom-header">
                Date
              </th>
              <th scope="col" className="custom-header">
                Keywords & Targets Optimized
              </th>
              <th scope="col" className="custom-header">
                Mode
              </th>
              <th scope="col" className="custom-header">
                Template
              </th>
              <th scope="col" className="custom-header">
                Tokens
              </th>
              <th scope="col" className="custom-header">
                Cost
              </th>
              <th scope="col" className="custom-header">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="custom-content">
                June 7th 2023, Wed
              </th>
              <td className="custom-content">82</td>
              <td className="custom-content">Simple</td>
              <td className="custom-content">Balanced</td>
              <td className="custom-content">82</td>
              <td className="custom-content">$0.82</td>
              <td className="custom-content file">6.07.2023_ACoS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Logs;
