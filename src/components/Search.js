import React from "react";

function Search({ onSearch, searchedItem }) {
  function handleChange(e) {
    onSearch(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchedItem} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
