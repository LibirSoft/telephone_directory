import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types"

export default class List extends Component {
  static propTypes = {

    contacts: PropTypes.array.isRequired,

  };
  state = {
    filterText: ""


  };

  onfilterchange = (event) => {
    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    const filteredContacts = this.props.contacts.filter(
      contact => {
        return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1;
      })

    return (
      <div className={"listArea"}>
        <input
          value={this.state.filterText}
          onChange={this.onfilterchange}
          name={"filter"}
          id={"filter"}
          placeholder={" filter by name or phone"}
        />
        <ul className={"list"}>
          {
            filteredContacts.map(contact => {
              return (
                <li key={contact.phone}>
                  <span className={"name"}>{contact.name}</span>
                  <span className={"phone"}>{contact.phone}</span>
                  <span className={"clearfix"}></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
