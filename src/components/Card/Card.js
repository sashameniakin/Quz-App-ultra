import "./Card.css";
import { useState } from "react";
import Tags from "../Tags/Tags";

export default function Card({ question, answer, tags }) {
  const [showAnswer, setShowAnswer] = useState(true);

  function toggleShowAnswer(value) {
    setShowAnswer(!value);
  }

  return (
    <div className="cards-container__flex">
      <img
        className="image__bookmark"
        src="/images/bookmark-light.png"
        alt="bookmark_image"
        width="70px"
        height="55px"
      />
      <h2>Question?</h2>

      <p className="p__cards">{question}</p>
      <div className="showAnswer__container">{!showAnswer ? answer : ""}</div>
      <button
        onClick={() => toggleShowAnswer(showAnswer)}
        className="showAnswer__button"
      >
        {showAnswer ? "Show Answer" : "Hide Answer"}
      </button>
      <ul className="Card__tags">
        <Tags tags={tags} />
      </ul>
    </div>
  );
}
