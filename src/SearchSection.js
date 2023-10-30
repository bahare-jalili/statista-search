import React, { useState } from "react";
import axios from "axios";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("statista");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://cdn.statcdn.com/static/application/search_results.json"
      );
      const results = response.data?.items;

      onSearch(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="pos-relative searchApp__container">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for statistics"
        type="text"
      />
      <button
        type="button"
        className="button button--primary searchApp__submitButton"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

function SearchResults({ results }) {
  return (
    <section className="searchApp__results">
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} className="panelCard padding-all-20">
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))
      ) : (
        <div className="panelCard padding-all-20">No Results</div>
      )}
    </section>
  );
}

function SearchSection() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default SearchSection;
