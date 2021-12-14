import React from "react";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="#rpg-start">Role Playing Games</a>
          </li>
          <li>
            <a href="#board">Board Games</a>
          </li>
          <li>
            <a href="#tabletop">Table Top Games</a>
          </li>
          <li>
            <a href="#card">Card Games</a>
          </li>
          <li>
            <a href="#event">Events</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li className="social-li">
            <div className="social-box">
              <a href="nowhere">
                <img
                  className="facebook-icon"
                  src="./images/icons/facebook.png"
                  alt="facebook icon"
                />
              </a>

              <a href="#home">
                <img
                  className="twitter-icon"
                  src="./images/icons/twitter.png"
                  alt="nowhere"
                />
              </a>

              <a href="#home">
                <img
                  className="facebook-icon"
                  src="./images/icons/discord.png"
                  alt="nowhere"
                />
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
