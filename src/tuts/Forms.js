import React, {useState} from 'react'

const Forms = () => {

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(userName === 'admin' && password === 'admin'){
      setMessage('Welcome admin!')
    } else {
      setMessage('Who are you?')
    }
  }

  return (
    <div>
      <h1>{message }</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='userName' value={userName} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" name='password' value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
);
}

export default Forms
