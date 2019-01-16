import React, { Component } from 'react';
import './App.css';
import HeaderPage from './components/HeaderPage';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage />
        <Main />
      </div>
    );
  }
}

export default App;
