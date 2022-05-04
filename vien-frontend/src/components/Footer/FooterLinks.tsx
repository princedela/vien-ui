import React from "react";

export default function FooterLinks({ title, links }: FooterLinksProp) {
  return (
    <section className="footer-links">
      <h4 className="footer-title">{title}</h4>
      <ul>
        {links.map(({ name, href }, i) => (
          <li key={i}>
            <a href={href}>{name}</a>{" "}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface FooterLinksProp {
  title: string;
  links: Array<SingleLink>;
}

interface SingleLink {
  name: string;
  href: string;
}
