import "./App.css";
import React, { Component } from "react";
import Contacts from "./Components/Contacts.js"

export default class App extends Component {
  state = {

    contacts : [{
        name :"Yuşa",
        phone :"12345678912"
    },{
        name :"G-hot",
        phone :"12345678913"
    }]

}
addContact = (contact) => {
  const { contacts} = this.state
  contacts.push(contact);

  this.setState({contacts})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Contacts 
          addContact={this.addContact}
          contacts={this.state.contacts}></Contacts>
        </header>
      </div>
    );
  }
}
