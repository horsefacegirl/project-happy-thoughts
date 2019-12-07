import React, { useState } from 'react'

const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(message)
    setMessage("")
  }

  return (
    <form>
      <h3>What is making you happy right now?</h3>
      <textarea
        value={message}
        rows="3"
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <button type="submit" onClick={handleSubmit}>Send Happy Thought</button>
    </form >
  )
}

export default HappyForm
