import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div className={"listArea"}>
        <input
          name={"filter"}
          id={"filter"}
          placeholder={" filter by name or phone"}
        />
        <ul className={"list"}>
          <li>
            <span className={"name"}>Yuşa Kopuz</span>
            <span className={"phone"}>12345678912</span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}>G-hot Özdemir</span>
            <span className={"phone"}>12345678913</span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}>Vatu Oksüz</span>
            <span className={"phone"}>12345678914</span>
            <span className={"clearfix"}></span>
          </li>
        </ul>
      </div>
    );
  }
}
