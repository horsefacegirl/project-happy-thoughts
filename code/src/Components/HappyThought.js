import React from "react";
import moment from "moment";
import { ThoughtWrapper, FlexWrapper, HeartButton } from "./styles";
import Heart from "../static/heart.svg";

const HappyThought = ({ thought, addHearts }) => {
  const { message, hearts, createdAt } = thought;

  return (
    <ThoughtWrapper>
      <h1>{message}</h1>
      <FlexWrapper>
        <FlexWrapper>
          <HeartButton
            hearts={hearts}
            role="button"
            tabIndex="0"
            onClick={() => addHearts()}
          >
            <img src={Heart} alt="heart icon" />
          </HeartButton>
          <span>x {hearts}</span>
        </FlexWrapper>
        <p>{moment(createdAt).fromNow()}</p>
      </FlexWrapper>
    </ThoughtWrapper>
  );
};

export default HappyThought;
