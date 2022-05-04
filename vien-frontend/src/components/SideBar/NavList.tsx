import React from "react";
import NavItem from "./NavItem";

export default function NavList() {
  return (
    <ul className="nav-list">
      <NavItem title="Profile" iconSrc="/img/profile.svg" />
      <NavItem title="My listing" iconSrc="/img/listing.svg" />
      <NavItem title="Saved homes" iconSrc="/img/saved-homes.svg" />
      <NavItem title="Saved search" iconSrc="/img/saved-search.svg" />
      <NavItem title="Messages" iconSrc="/img/messages.svg" />
      <NavItem title="Notifications" iconSrc="/img/notifications.svg" />
      <NavItem title="Billing" iconSrc="/img/billing.svg" />
      <NavItem title="Analytics" iconSrc="/img/analytics.svg" />
      <NavItem title="Blog" iconSrc="/img/blog.svg" />
    </ul>
  );
}
