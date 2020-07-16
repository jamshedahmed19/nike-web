import React from "react";
import "../Assets/Style.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Badge from "@material-ui/core/Badge";

function Header() {
  return (
    <header className="header">
      {/* Top Bar */}
      <nav className="navbar">
        <div className="navitems left">
          <Link to="/join-us">
            <span>Join Us</span>
          </Link>
          <Link to="/jordan">
            <img
              src="https://www.nike.com/assets/experience/ciclp/static/v2/1280-bf7a43dfb69/static/icons/jordan.svg"
              alt="nike jordan"
            />
          </Link>
        </div>
        <div className="navitems right">
          <Link to="/shoppingcart">
            <span className="text">Help</span>
          </Link>
          <Link to="/shoppingcart">
            <span className="icon">
              <Badge variant="dot" color="error">
                <ShoppingCartIcon fontSize="small" />
              </Badge>
            </span>
          </Link>
          <Link to="/location">
            <span className="icon">
              <LocationOnIcon fontSize="small" />
            </span>
            Pakistan
          </Link>
        </div>
      </nav>
      {/* Actual Navbar */}
      <div className="menu-container">
        <nav className="menu">
          <ul className="items-list">
            <Link to="/">
              <li className="menu-item">
                <img
                  src="http://pngimg.com/uploads/nike/nike_PNG1.png"
                  alt="nike logo"
                />
              </li>
            </Link>
            <Link to="/new-release">
              <li className="menu-item">New Releases</li>
            </Link>
            <Link to="/men">
              <li className="menu-item">Men</li>
            </Link>
            <Link to="/women">
              <li className="menu-item">Women</li>
            </Link>
            <Link to="/kids">
              <li className="menu-item">Kids</li>
            </Link>
            <Link to="/collections">
              <li className="menu-item">Collections</li>
            </Link>
            <Link to="/customize">
              <li className="menu-item">Customize</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
