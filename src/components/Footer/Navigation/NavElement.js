import "./NavElement.css";

export default function NavElement({ classText, route, altText }) {
  return (
    <div class={classText}>
      <img src={route} alt={altText} width="50px" height="50px" />
    </div>
  );
}
