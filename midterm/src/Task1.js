import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task1 extends Component {
  constructor(props) {
    super(props);

  this.state = {
    isToggleOnFirst: false,
    isToggleOnSecond: false,
    isToggleOnThird: false,
     items:["Home", "About", "Contact"]
  };

  this.handleHome = this.handleHome.bind(this);
  this.handleAbout = this.handleAbout.bind(this);
  this.handleContact = this.handleContact.bind(this);

}

  handleHome() {
    this.setState(function(prevState) {
      return {isToggleOnFirst: !prevState.isToggleOn};
    });
  }

  handleAbout() {
    this.setState(function(prevState) {
      return {isToggleOnSecond: !prevState.isToggleOn};
    });
  }

  handleContact() {
    this.setState(function(prevState) {
      return {isToggleOnThird: !prevState.isToggleOn};
    });
  }
  render() {
    return (
      <div className="App">
    <ul className="header">
          <div className="flex">
          {this.state.isToggleOn ? 'Login' : 'Logout'}
            <li onClick = {this.handleHome.bind(this)}><h1> {this.state.items[0]}</h1></li>
              {this.state.isToggleOnFirst && (
                <li className="first"/>
                )}
         <li onClick = {this.handleAbout.bind(this)}><h1>{this.state.items[1]}</h1></li>
              {this.state.isToggleOnSecond && (
                <li className="second"/>
                )}
        <li onClick = {this.handleContact.bind(this)}><h1>{this.state.items[2]}</h1></li>
              {this.state.isToggleOnThird && (
                <li className="third"/>
                )}
        </div>
    </ul>
      </div>
    );
  }
}

export default Task1;
