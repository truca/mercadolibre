import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import Item from "./Item";

const ItemList = ({ loading_items, items, onLoading, onReady }) => (
  <div>
    <div className="itemList" >
      {loading_items?
        "L" :
        R.map(item => (<Item key={item.id} {...item} />), items)
      }
    </div>
  </div>
);

ItemList.propTypes = {
  loading_items: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    loading_items: state.loading_items,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
