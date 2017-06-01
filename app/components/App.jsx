import React from 'react';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <div id="nav">Nav / Sidepanel</div>
        <input id="search-box" placeholder="¿Qué estás buscando?" type="text" />
        <Counter />
      </div>
    );
  }
}
