import React from 'react';
import logo from './logo.svg';
import './App.css';
//这里的引入的组件必须是大写开头
import S from './stateStart/startState'
import TimerID from './componentMount/componentMount'
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React~@@</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <button>点我一下 { +new Date() }</button>
      <input type="text" value={this.props.input} readOnly />
      /*//这里的引入的组件必须是大写开头*/

          <S></S>
          <hr/>
          <TimerID/>
      </div>
    );
  }
}

 // App;
