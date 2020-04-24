import React, { useState } from 'react';
import eventService from './services/eventServices'
import Jokes from './components/Jokes'

function App() {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const creds = JSON.stringify(values)
    eventService.login(creds)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err.message))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const creds = JSON.stringify(values)
    console.log(creds)
    eventService.register(creds)

    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err.message))
  }


  return (
    <div className="App">
      <form>
        <div className="inputs">
          <label htmlFor="name">Username</label>
          <input onChange={handleChanges} name="username" id="name" type="text"/>
        </div>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input onChange={handleChanges} name="password" id="password" type="text"/>
        </div>
        <div id="reg-buttons">
          <button className="reg-button" onClick={handleLogin}>Login</button>
          <button className="reg-button" onClick={handleRegister}>Register</button>
        </div>
      </form>

      <Jokes />
    </div>
  );
}

export default App;
