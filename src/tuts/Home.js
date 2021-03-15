import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>This is the Homepage</h2>
      <p>Check out the <Link to='/lists'>Links component</Link></p>
      <p>Check out the <Link to='/useref-hook'>UseRef hook component</Link></p>
    </div>
  )
}

export default Home
