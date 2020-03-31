import React from "react";
import "./styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        {/* Insert phoneFixIt logo here */}
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarNavigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarNavigation" class="navbar-menu">
        <div class="navbar-start">
          {/* <a class="navbar-item">Home</a> */}
          <Link to="/" class="navbar-item">
            Home
          </Link>
          <Link to="/services" class="navbar-item">
            <div class="navbar-item has-dropdown is-hoverable">
              {/* <a class="navbar-link">Services</a> */}
              Services
              <div class="navbar-dropdown">
                <Link to="services/phonerepair" class="navbar-item">
                  Phone Repair
                </Link>
                <Link to="services/iphonerepair" class="navbar-item">
                  Tablet Repair
                </Link>
                <Link to="services/iphonerepair" class="navbar-item">
                  Computer & Laptop Repair
                </Link>
                <Link to="services/iphonerepair" class="navbar-item">
                  Apple iPhone Repair
                </Link>
                <Link to="services/iphonerepair" class="navbar-item">
                  Samsung Repair
                </Link>
                <Link to="services/iphonerepair" class="navbar-item">
                  Apple iPad Repair
                </Link>
              </div>
            </div>
          </Link>
          <Link to="/main-in-repair" class="navbar-item">
            Mail-in Repair
          </Link>
          <Link to="/we-come-to-you" class="navbar-item">
            We Come to you
          </Link>
          <Link to="/about" class="navbar-item">
            About Us
          </Link>
          <Link to="/shop" class="navbar-item">
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
