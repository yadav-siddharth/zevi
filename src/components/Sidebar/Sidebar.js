import React, { useState } from "react";
import {BsFilter} from 'react-icons/bs';
import {BiSolidCategoryAlt} from 'react-icons/bi';
import {GiPriceTag} from 'react-icons/gi';
import "./sidebar.css";

const Sidebar = ({ products, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (

    <div className="sidebar">
      <h1 className="sidebar-header"><BsFilter/>Modify Results</h1>
      <div className="modify-section">
        <div className="side1-section">
          <h2><BiSolidCategoryAlt/>Category</h2>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="input-select"
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>

        <div className="side1-section">
          <h2><GiPriceTag/>Price</h2>
          <select
            id="price"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="input-select"
          >
            <option value="">All</option>
            <option value={109.95}>$0-$50</option>
            <option value="3">$50-$100</option>
            <option value="2">$100-$150</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
