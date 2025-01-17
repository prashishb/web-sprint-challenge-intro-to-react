import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <StyledTitle>REACT WARS ></StyledTitle>
      {characters.map(elem => <Character character={elem} key={elem.name} />)}
    </div>
  );
}

const StyledTitle = styled.h1`
  font-family: 'Monoton', cursive;
  font-weight: 400;
  font-size: 60px;
  color: white;
  text-shadow: 3px 3px 8px white;
  word-spacing: 30px;

  @media (max-width: 750px) {
    font-size: 40px;
    word-spacing: 20px;
  }

  @media (max-width: 450px) {
    font-size: 25px;
    word-spacing: 12px;
  }
`

export default App;
