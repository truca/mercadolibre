import React, { PropTypes } from 'react';

const Element = ({title, price, thumbnail}) => (
  <div className="element">
    <img src={thumbnail} />
    <h5>{title}</h5>
    <p>{price}</p>
  </div>
);

export default Element;
