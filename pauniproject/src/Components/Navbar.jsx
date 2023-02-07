import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  
//   FaMap,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import {IconName} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>आ</span>पली
            <span>प</span>वणी
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/latestnews">Latestnews</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                target="_">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14920.169062826271!2d79.62465757680155!3d20.78957792805315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b58afa3dcc853%3A0x8b4f90c73de6335f!2sPauni%2C%20Maharashtra%20441910!5e0!3m2!1sen!2sin!4v1674817651871!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                target="_">
                <FaMap className="map"/>
              </a>
            </li> */}
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Aapli Pauni</h1>
      </section> */}
    </>
  );
};

export default Navbar;