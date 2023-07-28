import React from "react";
import {BiTrendingUp} from 'react-icons/bi';
import "./search.css";

const Suggestion = ({ data, onSuggestionClick }) => {
  return (
    <div className="suggestion-box">
      <h2 ><BiTrendingUp/>Latest Products</h2>
      <ul className="list-popular">
        {data.map((item, id) => (
          <li key={id} onClick={() => onSuggestionClick(item)}>
            <img src={item.image} className="product-image" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
