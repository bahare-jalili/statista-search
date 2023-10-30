import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = React.memo(function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("statista");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="pos-relative searchApp__container">
      <label htmlFor="search-input" className="sr-only">
        Search for statistics
      </label>
      <input
        id="search-input"
        data-testid="search-input"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for statistics"
        type="text"
      />
      <button
        data-testid="search-button"
        type="button"
        className="button button--primary searchApp__submitButton"
        onClick={() => onSearch(searchTerm)}
      >
        Search
      </button>
    </div>
  );
});
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
