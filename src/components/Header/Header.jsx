import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../images/alienlogo.jpeg";
import "./Header.scss";

const Header = () => {
  // const navigate = useNavigate();

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Weird Movies </div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
