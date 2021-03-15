import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

const Home = () => {

  const {state, setState} = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      setState(state => ({
        ...state,
        name: "Egomson"
      }))
    }, 1000);
  }, [])

  return (
    <div>
      <h2>This is the Homepage</h2>
      <h4>Welcome {state.name}!</h4>
    </div>
  )
}

export default Home
