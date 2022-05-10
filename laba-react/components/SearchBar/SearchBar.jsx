import React from "react";
import Input from './Input'

function SearchBar(props) {

  return (
    <div className="search-block">
      <Input
        {...props}
        value={props.title}
        type="text"
        id="search"
        className="search-input input"
        placeholder="Enter course name..."
      />
      <label htmlFor="search" className="search-button button">
        Search
      </label>
    </div>
  );
}

export default SearchBar;
