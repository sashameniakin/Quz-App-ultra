import Card from "../components/Card/Card";

export default function Bookmark({ newCards }) {
  return newCards.map((cards) => {
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
