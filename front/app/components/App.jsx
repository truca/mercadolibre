import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';

import Nav from './parts/Nav';
import Index from './Index';
import Search from './Search';
import Element from './Element';

const App = ({id, title, price, thumbnail}) => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Index} />
      <Route exact path="/items" component={Search} />
      <Route path="/items/:id" component={Element} />
    </div>
  </Router>
);

export default App;
