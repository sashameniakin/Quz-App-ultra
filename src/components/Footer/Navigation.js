import NavElement from "./Navigation/NavElement";
import "../Footer/Navigation.css";

import "../Footer/Navigation/NavElement.css";

function Navigation({ page, setPage, onPage = () => {} }) {
  function handleOnPage(page) {
    onPage(page);
  }

  return <NavElement page={page} setPage={setPage} onPage={handleOnPage} />;
}

export default Navigation;
