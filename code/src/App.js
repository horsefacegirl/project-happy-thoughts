import React, { useEffect, useState } from "react";
import HappyThought from "./Components/HappyThought";
import HappyForm from "./Components/HappyForm";
import { AppWrapper } from "Components/styles";

export const App = () => {
  const urlThoughts = "https://horsefacegirl-happy-thoughts.herokuapp.com/thoughts";
  const [thoughts, setThoughts] = useState([]);
  const getThoughts = () => {
    fetch(urlThoughts)
      .then(res => res.json())
      .then(json => setThoughts(json));
  };

  useEffect(() => {
    getThoughts();
  }, []);

  const handleFormSubmit = message => {
    fetch(urlThoughts, {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: { "Content-Type": "application/JSON" }
    }).then(() => {
      getThoughts();
    });
  };

  const handleAddHearts = id => {
    fetch(`https://horsefacegirl-happy-thoughts.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" }
    }).then(() => {
      getThoughts();
    });
  };

  return (
    <AppWrapper>
      <HappyForm onFormSubmit={message => handleFormSubmit(message)} />
      {thoughts.map(thought => (
        <HappyThought
          key={thought._id}
          thought={thought}
          addHearts={() => handleAddHearts(thought._id)}
        />
      ))}
    </AppWrapper>
  );
};
