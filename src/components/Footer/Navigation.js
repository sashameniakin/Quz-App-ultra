import NavElement from "./Navigation/NavElement";
import "../Footer/Navigation.css";

import "../Footer/Navigation/NavElement.css";

function Navigation({ page, setPage }) {
  /*   function highlightPage(page) {
    setPage(page);
  } */
  /* setCurrentPage("home"); */

  return <NavElement page={page} setPage={setPage} />;
}

export default Navigation;
