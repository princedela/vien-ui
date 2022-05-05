import React from "react";

export default function Profile({
  name = "Alex Assenmacher",
  role = "Home Buyer",
}) {
  return (
    <div className="profile">
      <div className="profile-img">
        <img className="avatar" alt="User Avatar" src="/img/headshot.jpg" />
        <button className="edit-photo">
          <img src="/img/bx-camera.svg" alt="Edit Photo Button" />
        </button>
      </div>
      <h3>Alex Assenmacher</h3>
      <p className="role">{role}</p>
      <button className="edit-profile">Edit Profile</button>
    </div>
  );
}
