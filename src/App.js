import React, { Component } from 'react';
import './App.css';
import SmartphoneContainer from './_containers/SmartphoneContainer';

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <SmartphoneContainer/>
      </div>
    );
  }
}

export default App;
