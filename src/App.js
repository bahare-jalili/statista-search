import React from "react";
import "./assets/styles/App.css";
import SearchSection from "./components/search/SearchSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

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
