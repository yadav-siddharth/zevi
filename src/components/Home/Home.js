import React from 'react';
import ProductList from '../ProductsList.js/ProductList';

import Search from '../Search/Search';

const Home = () => {
  return (
    <div>
      <Search/>    
      <ProductList/>
    </div>
  )
}

export default Home
