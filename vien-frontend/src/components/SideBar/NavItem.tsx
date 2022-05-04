import React from "react";

export default function NavItem({ title = "", href = "#", iconSrc = "" }) {
  return (
    <li className="nav-item">
      <a href={href}>{title}</a>
      <img className="nav-icon" src={iconSrc} alt="Nav Icon" />
    </li>
  );
}
