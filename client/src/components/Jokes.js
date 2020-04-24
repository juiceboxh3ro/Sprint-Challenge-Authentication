import React, { useState } from 'react'
import eventService from '../services/eventServices'

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  const getDadJokes = e => {
    e.preventDefault()
    eventService.getJokes()
    .then(res => {
      setJokes(res.data)
    })
  }

return (
  <div id="joke-box">
    <button id="joke-button" onClick={getDadJokes}>Jokes</button>
    <div id="jokes">
      {jokes.map(joke => (
        <div id="joke" key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  </div>
)
}

export default Jokes