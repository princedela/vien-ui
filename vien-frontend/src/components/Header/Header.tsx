import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-flex">
          <div className="action-input search">
            <input type="text" />
            <button className="copy">
              <img src="/img/search.svg" alt="Search Button Icon" />
            </button>
          </div>
          <ul className="header-nav">
            <li>
              <a href="#">Udwell Now</a>
            </li>
            <li>
              <a href="#">Sell a property</a>
            </li>
          </ul>
          <button className="more-button">
            {" "}
            <img src="/img/menu-icon.svg" alt="More Button Icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
