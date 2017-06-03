import React, { PropTypes } from 'react';

const Item = ({id, title, price, thumbnail}) => (
  <div className="item">
    <a href={"/items/"+id}><img src={thumbnail} /></a>
    <h5>{title}</h5>
    <p>{price}</p>
  </div>
);

export default Item;
