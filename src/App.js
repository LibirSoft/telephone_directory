import "./App.css";
import React, { Component } from "react";
import Contacts from "./Components/Contacts.js"

export default class App extends Component {
  state = {
    name: "mehmet",
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Contacts></Contacts>
        </header>
      </div>
    );
  }
}
