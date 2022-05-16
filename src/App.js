import { useState, useEffect } from 'react';

import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import TitleApp from './components/title-app/title-app.component';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const[searchField, setSearchField] = useState("");
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  } , []);

  const filteredMonsters = monsters.filter( (monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
  };


  return (
 
    <div>
    <TitleApp />
    <SearchBox
      onSearchHandler= {onSearchChange}
      placeholder="Search monsters"
      className="search-box-monsters" />
    <CardList
      monsters= {filteredMonsters} />
    </div>
  
  )
}
export default App;
