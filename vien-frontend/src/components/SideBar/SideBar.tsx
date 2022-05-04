import React from "react";
import NavList from "./NavList";
import Profile from "./Profile";
import "./sidebar.css";

export default function SideBar() {
  return (
    <section className="sidebar">
      <Profile />
      <NavList />
      <section className="profile-link">
        <p>Profile link</p>
        <div className="action-input">
          <input
            value="https://www.udwell.com/p."
            disabled
            readOnly={true}
            className="copyable"
          />
          <button className="copy">
            <img src="/img/bx-copy.svg" alt="Copy Icon" />
          </button>
        </div>
      </section>
    </section>
  );
}
