import React from "react";
import { dummy } from "../../dummy/dummy";
import "./footer.css";
import FooterLinks from "./FooterLinks";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>Counter Delivery, Carters Beach PostCentre, Westport</p>
        {dummy.footerLinks.map(({ title, links }, i) => (
          <FooterLinks key={i} title={title} links={links} />
        ))}
        <section className="contact">
          <h4 className="footer-title">Address</h4>
          <p>Counter Delivery, Carters Beach PostCentre, Westport</p>
          <div className="social-icons">
            <SocialIcon url="/img/logo-fb.svg" />
            <SocialIcon url="/img/logo-ig.svg" background="#098B71" />
            <SocialIcon url="/img/logo-twitter.svg" />
          </div>
        </section>
      </div>
      <div className="copyright">
        <p>©Udwell, LLC. All rights reserved.</p>
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}
