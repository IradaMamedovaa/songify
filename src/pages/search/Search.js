import React from "react";

import SearchInput from "components/search-input/SearchInput";

import "./Search.scss";

const Search = () => {
  return (
    <div className="Search">
      <h1>You can search here</h1>
      <SearchInput />
    </div>
  );
};

export default Search;
