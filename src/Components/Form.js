import React, { Component } from 'react'
import "./Form.css"

export default class Form extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <form>
                    <input name={"name"} id="name" placeholder="Type a name"></input>
                    <br/>   
                    <input name={"phone"} id="phone" placeholder="Type a phone"></input>        
                    <button>add</button>        
                </form>
            </div>
        )
    }
}
