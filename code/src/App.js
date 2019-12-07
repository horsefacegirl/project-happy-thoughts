import React, { useEffect, useState } from 'react'
import HappyThought from "./Components/HappyThought"
import HappyForm from "./Components/HappyForm"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const getThoughts = () => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setThoughts(json))
  }

  useEffect(() => {
    getThoughts()
  }, [])

  const handleFormSubmit = (message) => {
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/JSON" }
    })
      .then(() => {
        getThoughts()
      })
  }

  const handleAddHearts = (id) => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" }
    })
      .then((response) => {
        getThoughts()
      })
  }

  return (
    <div>
      <HappyForm onFormSubmit={(message) => handleFormSubmit(message)} />
      {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} addHearts={() => handleAddHearts(thought._id)} />

      ))}
    </div>
  )
}
