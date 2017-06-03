import React, { PropTypes } from 'react';
import ItemList from './parts/ItemList';
import { connect } from 'react-redux';
import U from "./../Utils.js";
import axios from "axios";

class Index extends React.Component {
  componentDidMount() {
    U.get("https://api.mercadolibre.com/sites/MLC/hot_items/search?limit=6",
      this.props.fetchingItems,
      this.props.getItemsSuccess,
      this.props.getItemsError);
  }
  render() {
    return (
      <div className="index">
        <ItemList />
      </div>
    );
  }
}


Index.propTypes = {
  fetchingItems: PropTypes.func.isRequired,
  getItemsSuccess: PropTypes.func.isRequired,
  getItemsError: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingItems: () => dispatch({ type: 'LOADING_ITEMS' }),
    getItemsSuccess: items => dispatch({ type: 'ITEMS_SUCCESS', items }),
    getItemsError: error => dispatch({ type: 'ITEMS_ERROR', error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)
