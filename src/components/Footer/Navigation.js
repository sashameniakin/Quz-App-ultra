import NavElement from "./Navigation/NavElement";
import "../Footer/Navigation.css";
import "../Footer/Navigation/NavElement.css";

function Navigation({ page, onPage = () => {} }) {
  function handleOnPage(page) {
    onPage(page);
  }

  return <NavElement page={page} highlightPage={handleOnPage} />;
}

export default Navigation;
