import React, {useRef, useEffect, useState} from 'react'

const Useref = () => {
  const h1Ref = useRef()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(h1Ref)
  }, [])

  return (
    <div>
      <h1 ref={h1Ref}>UseRef Hook</h1>
      <p>This is UseRef hook example {counter}</p>
      <button onClick={() => setCounter(counter => counter + 1)}>Change count</button>
    </div>
  )
}

export default Useref
