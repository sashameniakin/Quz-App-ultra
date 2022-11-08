import "./Tags.css";

export default function Tags({ tags }) {
  return tags.map((tags, index) => {
    return (
      <li key={index} className="Tags__listElement">
        {tags}
      </li>
    );
  });
}
