import Card from "../components/Card/Card";

export default function Cards({ newCards, onToggle = () => {} }) {
  function toggleBookmarked(ID) {
    onToggle(ID);
  }

  return newCards.map((cards) => {
    return (
      <Card
        key={cards.id}
        id={cards.id}
        question={cards.question}
        answer={cards.answer}
        tags={cards.tags}
        isBookmarked={cards.isBookmarked}
        toggleBookmark={toggleBookmarked}
      />
    );
  });
}
