import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Nav = ({ onChange }) => (
  <div id="nav">
    <ul>
      <li><Link to="/"><img src="img/logo.png" /></Link></li>
      <input placeholder="¿Qué estás buscando?" type="text" onChange={onChange} />
    </ul>
  </div>
);

Nav.propTypes = {
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch({ type: 'LOADING', searchText: event.target.value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
