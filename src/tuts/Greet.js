import React from 'react'
import {useParams} from "react-router-dom"

const Greet = () => {
  const params = useParams()

  return (
    <div>
      <h3>Welcome {params.name[0].toUpperCase() + params.name.slice(1)}!</h3>
    </div>
  )
}

export default Greet
