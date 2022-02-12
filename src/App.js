import React, { Component } from 'react';
// import Test from './components/Test';
// import Clock from './components/Clock';
// import Watch from './components/Watch';
import ClockList from './components/ClockList';






export default class App extends Component {
  render() {
    const quantities=[1,2,3];
    return (<div>
      
  <ClockList quantity={quantities} />

    </div>);
  }
}
