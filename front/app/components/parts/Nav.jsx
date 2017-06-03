import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

const Nav = withRouter(({ history, onChange }) => (
  <div id="nav">
    <div>
      <Link to="/"><img src="img/logo.png" /></Link>
      <input placeholder="¿Qué estás buscando?" type="text" onChange={event => {
        onChange(event.target.value);
        history.push(!!event.target.value? "/items?search=" + event.target.value : "/");
      }} />
    </div>
  </div>
));

Nav.propTypes = {
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: searchText => { return dispatch({ type: 'LOADING', searchText }); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
