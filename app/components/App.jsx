import React, { PropTypes } from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <div id="nav">mercadolibre</div>
        <input id="search-box" placeholder="¿Qué estás buscando?" type="text" onChange={this.props.onChange} />
        <Counter />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return { loading: state.loading, results: state.results };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: searchText => {
      dispatch({ type: 'LOADING', searchText })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
