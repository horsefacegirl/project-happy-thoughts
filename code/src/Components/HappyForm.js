import React, { useState } from 'react'
import { FormWrapper, FormButton } from "./styles"
import Heart from "../static/heart.svg"

const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(message)
    setMessage('')
  }

  return (

    <FormWrapper>
      <h3>What is making you happy right now?</h3>
      <textarea
        value={message}
        rows="3"
        onChange={event => setMessage(event.target.value)}
      ></textarea>

      <FormButton type="submit" role="button" tabIndex="0" onClick={handleSubmit}><img src={Heart} alt="heart icon" />
        <h4>Send Happy Thought</h4><img src={Heart} alt="heart icon" /></FormButton>
    </FormWrapper>
  )
}

export default HappyForm
