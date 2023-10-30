import React from "react";

const navLinks = [
  { text: "Home", url: "https://www.statista.com/" },
  { text: "About Statista", url: "https://www.statista.com/aboutus/" },
  { text: "Career", url: "https://www.statista.com/working-at-statista/" },
  { text: "Contact", url: "https://www.statista.com/contact/" },
  { text: "Help & FAQ", url: "https://www.statista.com/help/" },
  {
    text: "Privacy",
    url: "https://de.statista.com/statistik/imprint/#privacy",
  },
  { text: "Imprint", url: "https://www.statista.com/statistik/imprint/" },
];

export default function Footer() {
  return (
    <footer className="page__footer page__footer--small page__footer--dark">
      <div className="contentFlex">
        <nav
          className="navFlex page__footerNav page__footerNav--small page__footerNav--dark"
          aria-label="Statista Footer Navigation Small"
        >
          <ul className="navFlex__list">
            {navLinks.map((link, index) => (
              <li key={index} className="navFlex__item">
                <a
                  className="navFlex__text"
                  href={link.url}
                  aria-label={link.text}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
