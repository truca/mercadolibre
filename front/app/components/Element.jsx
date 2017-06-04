import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import U from "./../Utils.js";
import R from "ramda";

import Item from "./parts/Item";

class Element extends React.Component {
  getItem() {
    U.get(`https://localhost:3000/api/items/${this.props.match.params.id}`,
      this.props.fetchingItem,
      this.props.getItemSuccess,
      this.props.getItemError);
  }
  componentDidMount() {
    //if there's no item or it's not the correct item, try getting it from the items array
    if(Object.keys(this.props.item).length == 0 || this.props.item.id != this.props.match.params.id){
      const item = R.find(R.propEq('id', this.props.match.params.id))(this.props.items);
      if(!item){ // if we can`t find the item in the array, fetch it
        this.getItem();
      }else{ // if we found it, set it
        this.props.getItemSuccess(item);
      }
    }
  }
  render() {
    const item = this.props.item;
    if(Object.keys(item).length == 0) return (<div></div>);
    return (
      <div className="element">
        <div>
          <div className="left">
            <img src={item.picture} />
            <h5>Descripción del producto</h5>
            <p>{item.description? item.description : "Producto sin descripción"}</p>
          </div>
          <div className="right">
            <h5>{item.title}</h5>
            <p>{"$ " + (item.price.amount + item.price.decimals)}</p>
            <button>Comprar</button>
          </div>

        </div>
      </div>
    )
  }
}

Element.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    item: state.item,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingItem: () => dispatch({ type: 'LOADING_ITEM' }),
    getItemSuccess: item => dispatch({ type: 'ITEM_SUCCESS', item }),
    getItemError: error => dispatch({ type: 'ITEM_ERROR', error }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Element)
