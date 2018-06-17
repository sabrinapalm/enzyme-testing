import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Counter />
      </div>
    );
  }
}

export default App;
