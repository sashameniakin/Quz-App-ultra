import Card from "../components/Card/Card";

export default function Cards({ cards /* , toggleBookmark */ }) {
  return cards.map((cards) => {
    return (
      <Card
        key={cards.id}
        id={cards.id}
        question={cards.question}
        answer={cards.answer}
        tags={cards.tags}
        isBookmarked={cards.isBookmarked}
        /*   toggleBookmark={() => {
          toggleBookmark(cards.id);
        }} */
      />
    );
  });
}
