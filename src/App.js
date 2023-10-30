import React from "react";
import "./App.css";
import SearchSection from "./SearchSection";
function Header() {
  return (
    <>
      <header className="page__header page__header--dark">
        <div className="responsiveSection">
          <div className="responsiveSection__grid">
            <div className="logo">
              <svg
                role="banner"
                aria-labelledby="statistaLogo--title"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 215 42"
                className="statistaLogoSvg"
              >
                <title id="statistaLogo--title">Statista Logo</title>
                <path
                  d="M7.14,16.41c0-1.69,1.21-2.6,3-2.6,2.18,0,3.39,1.46,3.87,4.06l5.75-1c-1-5.08-4.6-8.65-9.92-8.65C4.72,8.25.72,11.82.72,17c0,8.89,12.71,11,12.71,16.63a2.75,2.75,0,0,1-3,2.85c-3.08,0-4.05-2.43-4.47-5.15L0,32.93C1,38.61,4.42,42,10.34,42c5.51,0,9.5-3,9.5-8.77C19.84,23.55,7.14,21.5,7.14,16.41Z"
                  className="statistaLogoSvg__path"
                ></path>
                <path
                  d="M33,.08H26.25V8.85H22.5v5.57h3.75V34.68c0,5,2.84,7.32,7.92,7.32a11.76,11.76,0,0,0,3.39-.36V35.83H35.32c-1.57,0-2.3-1-2.3-2.66V14.42h4.54V8.85H33Z"
                  className="statistaLogoSvg__path"
                ></path>
                <path
                  d="M62,17.08c0-5.93-3.57-8.83-9.86-8.83S41.61,11.82,41.25,18.41H48c.13-2.78.79-4.6,3.87-4.6,2.24,0,3.33,1.46,3.33,4.18v1.93c-9.74,3.69-14.45,7.62-14.45,14.76,0,4.17,2.29,7.32,6.89,7.32,3.27,0,5.38-1.09,7.92-3.15.06.79.31,1.64.37,2.54h6.47A23.22,23.22,0,0,1,62,38ZM55.22,33.41c-1.15,1.63-2.66,3-4.54,3-2,0-3.14-.85-3.14-3,0-2.84,1.51-5.08,7.68-8.59Z"
                  className="statistaLogoSvg__path"
                ></path>
                <path
                  d="M81.23,14.42V8.85H76.69V.08H69.92V8.85H66.17v5.57h3.75V34.68c0,5,2.84,7.32,7.92,7.32a11.8,11.8,0,0,0,3.39-.36V35.83H79c-1.57,0-2.3-1-2.3-2.66V14.42Z"
                  className="statistaLogoSvg__path"
                ></path>
                <g>
                  <rect
                    x="85.7"
                    y="8.85"
                    width="6.78"
                    height="32.54"
                    className="statistaLogoSvg__path"
                  ></rect>
                  <rect
                    x="85.7"
                    width="6.78"
                    height="6.17"
                    className="statistaLogoSvg__path"
                  ></rect>
                </g>
                <path
                  d="M104.58,16.41c0-1.69,1.2-2.6,3-2.6,2.18,0,3.39,1.46,3.87,4.06l5.75-1c-1-5.08-4.6-8.65-9.92-8.65-5.09,0-9.08,3.57-9.08,8.71,0,8.89,12.7,11,12.7,16.63a2.75,2.75,0,0,1-3,2.85c-3.08,0-4-2.43-4.48-5.15l-5.92,1.64c1,5.68,4.41,9.07,10.34,9.07,5.5,0,9.5-3,9.5-8.77C117.28,23.55,104.58,21.5,104.58,16.41Z"
                  className="statistaLogoSvg__path"
                ></path>
                <path
                  d="M130.46.08h-6.77V8.85h-3.75v5.57h3.75V34.68c0,5,2.84,7.32,7.92,7.32a11.8,11.8,0,0,0,3.39-.36V35.83h-2.24c-1.57,0-2.3-1-2.3-2.66V14.42H135V8.85h-4.54Z"
                  className="statistaLogoSvg__path"
                ></path>
                <path
                  d="M159.43,17.08c0-5.93-3.57-8.83-9.86-8.83s-10.52,3.57-10.88,10.16h6.77c.12-2.78.79-4.6,3.87-4.6,2.24,0,3.33,1.46,3.33,4.18v1.93c-9.74,3.69-14.46,7.62-14.46,14.76,0,4.17,2.3,7.32,6.9,7.32,3.26,0,5.38-1.09,7.92-3.15.06.79.3,1.64.36,2.54h6.48a23.43,23.43,0,0,1-.43-3.44Zm-6.77,16.33c-1.15,1.63-2.66,3-4.54,3-2.05,0-3.14-.85-3.14-3,0-2.84,1.51-5.08,7.68-8.59Z"
                  className="statistaLogoSvg__path"
                ></path>
                <g>
                  <path
                    d="M205.13,15.5a19,19,0,0,0-5.84,5.33l-1.55,2.24c-.23.32-.45.64-.51.71l-.47.67-1.43,2.06s-3.81,5.5-9.21,8.3c-5.6,2.91-12.93,2.72-13.53,2.7v3A1.47,1.47,0,0,0,174.06,42h39a1.47,1.47,0,0,0,1.47-1.47V13.91a1.58,1.58,0,0,1-.38.05S207.84,14.08,205.13,15.5Z"
                    className="statistaLogoSvg__path"
                  ></path>
                  <path
                    d="M213.07,0h-39a1.47,1.47,0,0,0-1.47,1.47V28.1l.21,0s6.32-.12,9-1.53a19.06,19.06,0,0,0,5.84-5.34L189.23,19l.5-.71c.06-.07.32-.45.47-.67s.8-1.14,1.43-2.06a29.65,29.65,0,0,1,9.21-8.3c5.84-3,13.58-2.7,13.58-2.7h.12v-3A1.47,1.47,0,0,0,213.07,0Z"
                    className="statistaLogoSvg__path"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function MainContent() {
  return (
    <main className="page__content grid">
      <section className="responsiveSection">
        <div className="responsiveSection__grid">
          <SearchSection />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="page__footer page__footer--small page__footer--dark">
      <div className="contentFlex">
        <nav
          className="navFlex page__footerNav page__footerNav--small page__footerNav--dark"
          aria-label="Statista Footer Navigation Small"
        >
          <ul className="navFlex__list">
            <li className="navFlex__item">
              <a className="navFlex__text" href="https://www.statista.com/">
                Home
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://www.statista.com/aboutus/"
              >
                About Statista
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://www.statista.com/working-at-statista/"
              >
                Career
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://www.statista.com/contact/"
              >
                Contact
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://www.statista.com/help/"
              >
                Help & FAQ
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://de.statista.com/statistik/imprint/#privacy"
              >
                Privacy
              </a>
            </li>
            <li className="navFlex__item">
              <a
                className="navFlex__text"
                href="https://www.statista.com/statistik/imprint/"
              >
                Imprint
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="body--responsive">
      <div className="page">
        <Header />
        <div className="hrPrimary--3"></div>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
