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
  <>
  <div>
    <button onClick={getDadJokes} props={jokes} >Jokes</button>
  </div>
  <div>
    {jokes.map(joke => (
      <div key={joke.id}>
        <p>{joke.joke}</p>
      </div>
    ))}
  </div>
  </>
)
}

export default Jokes