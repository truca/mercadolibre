import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

const Item = ({title, price, thumbnail}) => (
  <div className="item">
    <img src={thumbnail} />
    <h5>{title}</h5>
    <p>{price}</p>
  </div>
);

const ItemList = ({ loading, items, onLoading, onReady }) => (
  <div>
    <div>
      <span>
        {loading? "L" : R.map(item => (<Item key={item.id} {...item} />), items)}
      </span>
    </div>
  </div>
);

ItemList.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
