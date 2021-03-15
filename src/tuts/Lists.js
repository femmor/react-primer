import React from 'react'
import { Link } from 'react-router-dom'

const Lists = () => {

    const users = [
    {id: 1, name: "Emmanuel", age: 35, job: "Web Developer"},
    {id: 2, name: "Edwige", age: 27, job: "Health Adminr"},
    {id: 3, name: "David", age: 5, job: "Pilot"},
    {id: 4, name: "Reign", age: 0.5, job: "Engineer"},
  ]

  return (
    <div>
      <h2>React Lists</h2>
      <Link to="/">Back to Home</Link>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>{user.name} is {user.age} and a {user.job}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Lists
