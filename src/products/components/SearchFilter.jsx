import React from "react";

const SearchFilter = ({ internalSearch, onChangeSearch }) => {
  return (
    <div>
      <input
        type={"search"}
        name="search"
        id="search"
        placeholder="Search Items"
        value={internalSearch}
        // onChange={(e) => setInternalSearch(e.target.value)}
        onChange={(e) => onChangeSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchFilter;
