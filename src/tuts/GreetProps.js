import React from 'react'

const Props = ({ name, children }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      {children}
    </div>
  )
}

export default Props
