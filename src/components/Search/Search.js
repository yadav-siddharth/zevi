import React, { useState } from "react";
import Suggestion from "./Suggestion";
import data from "./data";
import { BsSearch } from "react-icons/bs";
import "./search.css";

const Search = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(value !== "");
  };

  const handleSuggestionClick = (item) => {
    setSearchTerm(item);
    setShowSuggestions(false);
  };
  return (
    
    <div className="search">
    {/* <h2 className="search-header"><BsSearch/></h2> */}
      <div className="group">
        <input
          placeholder="Search"
          type="search"
          className="input"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {showSuggestions && (
          <Suggestion data={data} onSuggestionClick={handleSuggestionClick} />
        )}
      </div>
    </div>

  );
};

export default Search;
