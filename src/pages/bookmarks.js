import { cards } from "../db";
import Card from "../components/Card/Card";

export default function Bookmark() {
  console.log(cards);

  return cards.map((cards) => {
    return cards.isBookmarked ? (
      <Card
        key={cards.id}
        id={cards.id}
        question={cards.question}
        answer={cards.answer}
        tags={cards.tags}
        isBookmarked={cards.isBookmarked}
      />
    ) : (
      ""
    );
  });
}
