import React, { Component } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>
        response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
  }

  
  inputField = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }
  
  render() {
    const { monsters, searchField} = this.state;
    const {inputField} = this;
    const filteredNames = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className='App'>
        <h1 className='heading'>Monster Rolodox</h1>
        <SearchBox className = 'search-box' onChange={inputField} placeholder = 'Search Monsters'/>
        <CardList  monsters =  {filteredNames}/>
      </div>
    )
  }
}
