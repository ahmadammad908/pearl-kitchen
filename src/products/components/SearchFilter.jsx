import React from "react";

const SearchFilter = ({ internalSearch, onChangeSearch }) => {
  return (
    <div
      style={{
        marginLeft: "50px",
      }}
    >
      <input
        style={{
          padding: "10px 30px",
          paddingLeft: "7px",
          borderRadius: "10px",
          background: "#bd1cbd",
          outline: "none",
          marginTop: "10px",
          color: "white",
        }}
        className="color"
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
