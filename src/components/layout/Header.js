import React from "react";
import { ReactComponent as StatistaLogo } from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="page__header page__header--dark">
      <div className="responsiveSection">
        <div className="responsiveSection__grid">
          <div className="logo">
            <StatistaLogo />
          </div>
        </div>
      </div>
    </header>
  );
}
