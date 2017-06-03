import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from './parts/Nav';
import Index from './Index';
import Search from './Search';
import Element from './Element';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Index} />
          <Route path="/items" component={Search} />
          <Route path="/items/:id" component={Element} />
        </div>
      </Router>
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
    onChange: event => dispatch({ type: 'LOADING', searchText: event.target.value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
