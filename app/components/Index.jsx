import React, { PropTypes } from 'react';

const Index = ({title, price, thumbnail}) => (
  <div className="index">
    <h5>Index</h5>
    <img src={thumbnail} />
    <h5>{title}</h5>
    <p>{price}</p>
  </div>
);

export default Index;
