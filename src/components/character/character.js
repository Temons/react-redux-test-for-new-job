import React, { Component } from "react";
import "./character.scss";

export default class Character extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="character">
        <h1>{item.name}</h1>
        <p className="character-status">{item.status}</p>
        <img src={item.image} alt="icon" />
      </div>
    );
  }
}
