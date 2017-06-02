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

const ItemList = ({ loading, results, onLoading, onReady }) => (
  <div>
    <div>
      <span>
        {R.map(item => (<Item key={item.id} {...item} />), results.results)}
      </span>
    </div>
  </div>
);

ItemList.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    results: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
