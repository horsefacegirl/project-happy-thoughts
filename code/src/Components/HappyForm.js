import React, { useEffect, useState } from 'react'

const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(message)
  }

  return (
    <form>
      <h3>Post a happy thought</h3>
      <textarea
        rows="3"
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <button type="submit" onClick={handleSubmit}>Submit Happy Thought!</button>
    </form >
  )
}

export default HappyForm
