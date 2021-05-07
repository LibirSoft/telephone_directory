import React, { Component } from 'react'
import "./Form.css"
import PropTypes from "prop-types"
export default class Form extends Component {

    static propTypes = {
        addContact: PropTypes.func
    }

    state = {
        name: "",
        phone: ""

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        })
        this.setState({
            name: "",
            phone: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name={"name"} id="name" placeholder="Type a name" value={this.state.name} onChange={this.onChange}></input>
                    <br />
                    <input name={"phone"} id="phone" placeholder="Type a phone" value={this.state.phone} onChange={this.onChange}></input>
                    <button>add</button>
                </form>
            </div>
        )
    }
}
