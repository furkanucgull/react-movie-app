import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="" />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search through thousand of movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Search;
