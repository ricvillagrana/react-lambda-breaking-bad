import React, { useState, useEffect } from 'react'
import { Container } from "nes-react";
import axios from 'axios'

import './App.css'

const App = (props) => {
  const [randomCharacter, setRandomCharacter] = useState({})
  const [characters, setCharacters] = useState([])

  const fetchRandomCharacter = async () => {
    const { data } = await axios.get('/.netlify/functions/breaking_bad_character')

    setRandomCharacter(data.character)
  }

  const fetchCharacters = async () => {
    const { data } = await axios.get('/.netlify/functions/breaking_bad_characters')

    setCharacters(data.characters)
  }

  useEffect(() => {
    fetchRandomCharacter()
    fetchCharacters()
  }, [])

  return (
    <Container>
      <div className="nes-container with-title is-centered">
        <p className="title">Random Character</p>
        <p>{randomCharacter.name}</p>
        <button type="button" className="nes-btn is-primary" onClick={fetchRandomCharacter}>New random</button>
      </div>
      <div className="lists">
        <ul className="nes-list is-disc">
          {characters.map(character => <li>
            {character.name}
            {character.name === randomCharacter.name && <i class="nes-icon trophy is-large" style={{ fontSize: '12px' }}></i>}
        </li>)}
        </ul>
      </div>
    </Container>
  )
}

export default App
