import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

const Nav = withRouter(({ history, onChange }) => (
  <nav id="nav">
    <div>
      <Link to="/"><img id="logo" src="../img/logo.png" /></Link>
      <button><img src="../img/magnifying-glass.png"/></button>
      <input placeholder="¿Qué estás buscando?" type="text" onChange={event => {
        onChange(event.target.value);
        history.push(!!event.target.value? "/items?search=" + event.target.value : "/");
      }} />
    </div>
  </nav>
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
