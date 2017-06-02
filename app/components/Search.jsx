import React, { PropTypes } from 'react';

const Search = ({title, price, thumbnail}) => (
  <div className="search">
    <h5>Search</h5>
    <img src={thumbnail} />
    <h5>{title}</h5>
    <p>{price}</p>
  </div>
);

export default Search;
