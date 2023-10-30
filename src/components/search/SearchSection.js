import React, { useCallback, useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { fetchData } from "../../api";
import Alert from "../alerts/Alert";
function SearchSection() {
  const [searchResults, setSearchResults] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSearch = useCallback(async (searchTerm) => {
    setLoading(true);
    try {
      const results = await fetchData(searchTerm);
      setSearchResults(results.data?.items || []);
      setAlertMessage(null);
      setAlertType(null);
    } catch (error) {
      setAlertMessage(
        error?.message
          ? `Fetch data failed: ${error?.message}`
          : "Fetch data failed!"
      );
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <div role="search">
      <SearchBar onSearch={handleSearch} />
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      <SearchResults loading={loading} results={searchResults} />
    </div>
  );
}

export default SearchSection;
