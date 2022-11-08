import "./Card.css";
import { useState } from "react";
import Tags from "../Tags/Tags";
import { cards } from "../../db";

export default function Card({
  id,
  question,
  answer,
  tags,
  /* toggleBookmark = () => {}, */
}) {
  const [showAnswer, setShowAnswer] = useState(true);
  const [isBookmark, setIsBookmarked] = useState();

  //default for toggled

  function toggleShowAnswer(value) {
    setShowAnswer(!value);
  }
  function toggleBookmark(value) {
    setIsBookmarked(!value);
    cards[id].isBookmarked = value;
  }

  return (
    <div className="cards-container__flex">
      <img
        onClick={() => toggleBookmark(isBookmark)}
        className="image__bookmark"
        src={
          cards[id].isBookmarked
            ? "/images/bookmark-dark.png"
            : "/images/bookmark-light.png"
        }
        alt="bookmark_image"
        width="60px"
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
