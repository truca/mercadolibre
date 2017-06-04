import React, { PropTypes } from 'react';
import ItemList from './parts/ItemList';
import { connect } from 'react-redux';
import U from "./../Utils.js";
import axios from "axios";
import R from "ramda"

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
    getItemsSuccess: data => {
      let categories = [];
      let items = R.map(item => {
        categories.push(item.category_id);
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.floor(item.price / 1),
            decimals: item.price % 1
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping
        }
      }, data.results);
      return dispatch({ type: 'ITEMS_SUCCESS', items: {author: {name: "Ignacio", lastname: "Ureta"}, categories, items} });
    },
    getItemsError: error => dispatch({ type: 'ITEMS_ERROR', error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index)
