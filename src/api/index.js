import axios from "axios";

const fetchData = (searchTerm) => {
  const response = axios.get(
    "https://cdn.statcdn.com/static/application/search_results.json"
  );
  return response;
};

export { fetchData };
