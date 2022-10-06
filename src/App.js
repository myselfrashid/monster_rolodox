import React, { useEffect, useState } from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box';

function App() {

  const [searchField, setsearchField] = useState('');
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);
  
  const filteredNames = monster.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const inputField = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setsearchField(searchField);
  }
  return (
    <div className='App'>
      <h1 className='heading'>Monster Rolodox</h1>
      <SearchBox className='search-box' onChange={inputField} placeholder='Search Monsters' />
      <CardList monsters={filteredNames} />
    </div>
  )
}
export default App