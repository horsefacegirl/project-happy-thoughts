import React from 'react'
import moment from 'moment'

const HappyThought = ({ thought, addHearts }) => {
  const { message, hearts, createdAt } = thought

  return (
    < article >
      <h1>{message}</h1>
      <button onClick={() => addHearts()}>{hearts}</button>
      <p>{moment(createdAt).fromNow()}</p>
    </article >
  )
}

export default HappyThought