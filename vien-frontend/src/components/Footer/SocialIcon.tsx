import React from "react";

export default function SocialIcon({ url = "", background = "white" }) {
  return (
    <div className="social-icon" style={{ backgroundColor: background }}>
      <img src={url} />
    </div>
  );
}
