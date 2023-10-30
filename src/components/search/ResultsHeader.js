import React from "react";

function ResultsHeader({ results }) {
  return (
    <section className="responsiveSection sortSection__color">
      <div className="responsiveSection__grid">
        <div className="flex padding-vertical-5 padding-horizontal-s-0 rightOrder">
          <div className="resultsBox leftOrder">
            <span className="hideOnMobile">
              <span className="leftOrder__totalResult">
                <b>TOTAL RESULTS:</b>
              </span>
            </span>
            <span
              className="leftOrder__totalResult"
              data-testid="results number"
            >
              {results.length} results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultsHeader;
