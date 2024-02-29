import React from "react";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logoSection">
          <img src={Logo} alt="" />
        </div>
        <div className="linksSecton">
          <ul className="list">
            <Link  to={'/'}>
              <li className="list-item">Home</li>
            </Link>
            <Link to={'/about'}>
              <li className="list-item">About</li>
            </Link>
            <Link to={'/contact'}>
              <li className="list-item">Contact</li>
            </Link>
            <Link to={'gallery'}>
              <li className="list-item">Gallery</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
