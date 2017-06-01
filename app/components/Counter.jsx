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

const BaseCounter = ({ loading, results, onLoading, onReady }) => (
  <div>
    <div>
      <span>
        {R.map(item => (<Item key={item.id} {...item} />), results.results)}
      </span>
    </div>
  </div>
);

/*
<p>{loading? "L" : "R"}</p>
<button onClick={onLoading}>loading</button>
<button onClick={onReady}>ready</button>
*/

BaseCounter.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.object.isRequired,
  onLoading: PropTypes.func.isRequired,
  onReady: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return { loading: state.loading, results: state.results };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoading: () => dispatch({ type: 'LOADING' }),
    onReady: () => dispatch({ type: 'READY' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseCounter)
