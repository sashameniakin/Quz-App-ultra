import "./NavElement.css";
import { NAVS } from "../../../db";

export default function NavElement({ page, setPage }) {
  function highlightPage(value) {
    setPage(value);
    console.log(value);
  }

  return (
    <footer className="container-grid__footer">
      <div
        onClick={() => highlightPage("home")}
        className={`nav home ${page === "home" ? "choosen" : ""}`}
        href={NAVS[0].link}
      >
        {/* <a href={NAVS[0].link}> */}
        <img
          src={page === "home" ? NAVS[0].route_dark : NAVS[0].route}
          alt={NAVS[0].altText}
          width="50px"
          height="50px"
        />
        {/* </a> */}
      </div>
      <div
        onClick={() => highlightPage("bookmarks")}
        className={`nav bookmarks ${page === "bookmarks" ? "choosen" : ""}`}
      >
        {/*  <a href={NAVS[1].link}> */}
        <img
          src={page === "bookmarks" ? NAVS[1].route_dark : NAVS[1].route}
          alt={NAVS[1].altText}
          width="50px"
          height="50px"
        />
        {/*  </a> */}
      </div>
      <div
        onClick={() => highlightPage("forma")}
        className={`nav forma ${page === "forma" ? "choosen" : ""}`}
      >
        {/* <a href={NAVS[2].link}> */}
        <img
          src={page === "forma" ? NAVS[2].route_dark : NAVS[2].route}
          alt={NAVS[2].altText}
          width="50px"
          height="50px"
        />
        {/*   </a> */}
      </div>
      <div
        onClick={() => highlightPage("profil")}
        className={`nav personal_profil ${page === "profil" ? "choosen" : ""}`}
      >
        {/*  <a href={NAVS[3].link}> */}
        <img
          src={page === "profil" ? NAVS[3].route_dark : NAVS[3].route}
          alt={NAVS[3].altText}
          width="50px"
          height="50px"
        />
        {/* </a> */}
      </div>
    </footer>
  );
}
