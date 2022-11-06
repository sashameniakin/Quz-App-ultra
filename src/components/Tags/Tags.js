import "./Tags.css";

export default function Tags({ tags }) {
  return tags.map((tags) => {
    return <li className="Tags__listElement">{tags}</li>;
  });
}
