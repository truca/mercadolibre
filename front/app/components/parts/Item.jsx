import React, { PropTypes } from 'react';

const Item = ({id, title, price, picture}) => (
  <div className="item">
    <div>
      <a href={"/items/"+id}><img src={picture} /></a>
    </div>
    <div>
      <p className="price" >{"$ " + (price.amount + price.decimals)}</p>
      <h3>{title}</h3>
    </div>
  </div>
);

export default Item;
