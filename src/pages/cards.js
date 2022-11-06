import Card from "../components/Card/Card";

export default function Cards({ cards }) {
  return cards.map((cards) => {
    return (
      <Card
        key={cards.id}
        question={cards.question}
        answer={cards.answer}
        tags={cards.tags}
      />
    );
  });
}
