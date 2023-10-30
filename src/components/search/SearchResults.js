import React from "react";
import ResultsHeader from "./ResultsHeader";
import SearchResultItem from "./SearchResultItem";
import LoadingSpinner from "../loading/LoadingSpinner";

const SearchResults = React.memo(({ loading, results }) => {
  const renderResults = () => {
    if (!results || results.length === 0) {
      return (
        <div
          className="panelCard padding-all-20"
          data-testid="no-results-alert"
          role="alert"
        >
          No Results
        </div>
      );
    }

    return (
      <>
        <ResultsHeader results={results} />
        {results.map((result) => (
          <SearchResultItem key={result.identifier} result={result} />
        ))}
      </>
    );
  };

  return (
    <section
      aria-busy={loading ? "true" : "false"}
      className="searchApp__results"
      data-testid="search-results"
    >
      {loading ? <LoadingSpinner /> : null}
      {renderResults()}
    </section>
  );
});

export default SearchResults;
