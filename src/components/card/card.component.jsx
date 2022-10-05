import React, { Component } from "react";

export default class Card extends Component {
  render() {
      const {name, id, email} = this.props.monster;
      return (
        <div key={id} className = 'card'>
        <img src={`https://robohash.org/${id}?set=set2&size=400x400`} alt={`${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    );
  }
}
