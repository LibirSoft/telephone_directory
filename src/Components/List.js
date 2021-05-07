import React, { Component } from 'react'
import "./List.css"

export default class List extends Component {
    render() {
        return (
            <div className={"listArea"}>
                <input name={"filter"} id={"filter"} placeholder={" filter by name or phone"} />
                <ul className={"list"}>
                    <li>Yuşa Kopuz </li>
                    <li>G-Hot Özdemir</li>
                    <li>Özgür Sarıhan</li>
                    <li>Vatuhan Öksüz</li>
                    <li>1000Tl Soyisminibilmiyom</li>
                </ul>
            </div>
        )
    }
}
