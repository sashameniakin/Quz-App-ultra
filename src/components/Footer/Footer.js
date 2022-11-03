import NavElement from "./Navigation/NavElement";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer class="container-grid__footer">
      <NavElement
        classText="nav home"
        route="/images/home.png"
        altText="home light"
      />
      <NavElement
        classText="nav bookmarks"
        route="/images/bookmark-light.png"
        altText="bookmark light"
      />
      <NavElement
        classText="nav forma"
        route="/images/form-light.png"
        altText="forma light"
      />
      <NavElement
        classText="nav personal_profil choosen"
        route="/images/profile-dark.png"
        altText="profile dark"
      />
    </footer>
  );
}

export default Footer;
