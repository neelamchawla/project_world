import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  return (
    <>
      <h1>Count - {count}</h1>
      <button
      onClick={() => setcount(prevCount => prevCount + 1)}
      >
        Increment
      </button>
    </>
  )
}

export default Counter
