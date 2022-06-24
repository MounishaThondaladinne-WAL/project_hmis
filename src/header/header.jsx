import React from "react";
import Cllogo from "../cllogo.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/sample">
        <img src={Cllogo} alt="CypressLawn" className="cypress-logo" />
      </Link>
      <ul className="mb-0">
        <li>
          <IoIosNotificationsOutline size={24} />
        </li>
        <li>Product Tour</li>
        <li className="user-info">WestAgileLabs</li>
      </ul>
    </div>
  );
};

export default Header;
