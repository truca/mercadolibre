import React, { PropTypes } from 'react';
import ItemList from './parts/ItemList';
import { connect } from 'react-redux';
import U from "./../Utils.js";
import axios from "axios";

class Search extends React.Component {
  getItems(searchText) {
    U.get("https://api.mercadolibre.com/sites/MLC/search?q="+searchText,
      this.props.fetchingItems,
      this.props.getItemsSuccess,
      this.props.getItemsError);
  }
  componentDidMount() {
    this.getItems(this.props.location.search.split("=")[1]);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.location.search.split("=")[1] != nextProps.location.search.split("=")[1])
      this.getItems(nextProps.location.search.split("=")[1]);
    //console.log(nextProps.location.search.split("=")[1]);
    //this.getItems();
  }
  render() {
    return (
      <div className="index">
        <h5>Search</h5>
        <ItemList />
      </div>
    );
  }
}


Search.propTypes = {
  fetchingItems: PropTypes.func.isRequired,
  getItemsSuccess: PropTypes.func.isRequired,
  getItemsError: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingItems: () => dispatch({ type: 'LOADING' }),
    getItemsSuccess: items => dispatch({ type: 'ITEMS_SUCCESS', items }),
    getItemsError: error => dispatch({ type: 'ITEMS_ERROR', error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
