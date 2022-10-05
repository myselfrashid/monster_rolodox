import React, { Component } from "react";
import Card from "../card/card.component";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="container" >
        {monsters.map((monster) => {
          return (
            <Card monster={monster} key={monster.id}/>
          )
        })}
      </div>
    );
  }
}
